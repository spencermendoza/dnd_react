import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { scan, pluck, distinctUntilKeyChanged } from 'rxjs/operators';
// import { Player } from '../Player/player';

type TurnStoreState = {
  turn: { duration: number; completed: boolean };
  player: { name: string };
};

export class TurnStore {
  private readonly _store: Subject<TurnStoreState>;
  private readonly _stateUpdates: Subject<Partial<TurnStoreState>>;

  constructor(initialState: TurnStoreState) {
    this._store = new BehaviorSubject(initialState);
    this._stateUpdates = new Subject();
    this._stateUpdates
      .pipe(
        scan((acc, curr) => {
          return { ...acc, ...curr };
        }, initialState)
      )
      .subscribe(this._store);
  }

  // TODO: Try using streams of functions
  // that return new slices of state to reduce
  // into our state store.
  // This way we can model our state changes
  // as pure functions of state.
  // nextState = currentAction(prevState);
  updateState(stateUpdate: Partial<TurnStoreState>) {
    this._stateUpdates.next(stateUpdate);
  }

  selectState<K extends keyof TurnStoreState>(
    stateKey: K
  ): Observable<TurnStoreState[K]> {
    return this._store.pipe(distinctUntilKeyChanged(stateKey), pluck(stateKey));
  }

  stateChanges(): Observable<TurnStoreState> {
    return this._store.asObservable();
  }
}
