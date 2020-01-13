import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilKeyChanged, pluck, scan } from 'rxjs/operators';

export class ObservableStore<T> {
  private _initialState: T;
  private _store: BehaviorSubject<T>;
  private _stateUpdates: Subject<(state: T) => T | Partial<T>>;

  /**
   * @description Hi
   * @param initialState
   */
  constructor(initialState: T) {
    this._initialState = initialState;
    this._store = new BehaviorSubject(initialState);
    this._stateUpdates = new Subject();
    this._stateUpdates
      .pipe(
        scan(
          (state, action) => ({
            // we spread in previous state
            // in case the action returns
            // a partial copy of state.
            ...state,
            ...action(state)
          }),
          initialState
        )
      )
      .subscribe(this._store);
  }

  /**
   * @description Subscribe to a part of the state store, by key.
   * @param stateKey A string that matches the name of the property containing the state to be subscribed to.
   */
  selectState<K extends keyof T>(stateKey: K) {
    return this._store.pipe(distinctUntilKeyChanged(stateKey), pluck(stateKey));
  }

  /**
   * **`stateUpdates`**
   * @description subscribe to all updates to the store, as an observable.
   */
  stateUpdates(): Observable<T> {
    return this._store.asObservable();
  }

  updateState(action: (state: T) => T | Partial<T>): void {
    this._stateUpdates.next(action);
  }
}
