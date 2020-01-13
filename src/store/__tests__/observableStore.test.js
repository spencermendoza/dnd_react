import { tap, map, share } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';
import { ObservableStore } from '../observableStore';
import { concat } from 'rxjs';

describe('Test tooling', () => {
  let testScheduler;
  // TODO: Find out if it's better to nest
  // this in a beforeEach hook, or if we can just
  // set up one of these for the whole test suite..
  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toStrictEqual(expected);
    });
  });

  it('should use helpers from rxjs and jest together.', () => {
    // The callback passed to `run` will be called
    // synchronously.
    // However, the helper functions
    // do not. To run any synchronous code or
    // assertions after 'virtual time', use flush().
    // The flush() helper function will finish all of the
    // observables referenced above it inside the run callback.
    testScheduler.run(helpers => {
      let lastValue = '';
      const { cold, expectObservable, flush } = helpers;
      // Dashes represent one frame of virtual time.
      const source$ = cold('--a-b---c');
      const expected = '--a-b---c';
      const actual$ = source$.pipe(tap(x => (lastValue = x)));

      // special assertion from rxjs/testing
      expectObservable(actual$).toBe(expected);
      flush();
      expect(lastValue).toEqual('c');
    });

    // Normal jest assertion and matcher.
  });

  it('should allow configuration of emitted values', () => {
    testScheduler.run(helpers => {
      let lastValue = 'replace me';
      const { cold, expectObservable, flush } = helpers;
      const source$ = cold('--a-b---c', { a: 1, b: 2, c: 3 });
      const expected = '--a-b---c';
      const final$ = source$.pipe(
        map(val => val * 10),
        tap(x => (lastValue = x))
      );

      expectObservable(final$).toBe(expected, { a: 10, b: 20, c: 30 });
      flush();
      expect(lastValue).toBe(30);
    });
  });

  it('should let you identify subscription points', () => {
    testScheduler.run(helpers => {
      const { cold, expectObservable, expectSubscriptions } = helpers;
      const source$ = cold('-a---b-|');
      const sourceTwo$ = cold('-c---d-|');
      const final$ = concat(source$, sourceTwo$);
      const expected = '-a---b--c---d-|';
      const sourceOneExpectedSub = '^------!';
      const sourceTwoExpectedSub = '-------^------!';

      expectObservable(final$).toBe(expected);
      expectSubscriptions(source$.subscriptions).toBe(sourceOneExpectedSub);
      expectSubscriptions(sourceTwo$.subscriptions).toBe(sourceTwoExpectedSub);
    });
  });
});

describe('ObservableStore', () => {
  const initialState = { name: 'robo rob' };
  let testScheduler;
  let nameStore;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toStrictEqual(expected);
    });

    nameStore = new ObservableStore(initialState);
  });

  it('should emit its initial state immediately', () => {
    testScheduler.run(helpers => {
      let name = 'replace me';
      // const initialState = { name: 'robo rob' };

      const { expectObservable, flush } = helpers;
      // const store = new ObservableStore({ name: 'robo rob' });
      const nameUpdates$ = nameStore
        .stateUpdates()
        .pipe(tap(n => (name = n.name))); /*?*/
      const expected = 'a---';
      expectObservable(nameUpdates$).toBe(expected, { a: initialState });
      flush();

      expect(name).toStrictEqual(initialState.name);
    });
  });

  it('should emit whenever state is updated', () => {
    testScheduler.run(helpers => {
      let lastValue;
      const { expectObservable, flush } = helpers; /*?*/
      const updatedState = { name: 'chungus grande' };
      const nameUpdates$ = nameStore.stateUpdates().pipe(
        tap(x => {
          lastValue = x;
        })
      );
      const nameUpdates2$ = nameStore.stateUpdates().pipe();

      // The observer will receive the latest
      // value from the store immediately on subscription.
      const expectedTimeline = 'a---';
      const expectedTimeline2 = 'b---';

      expectObservable(nameUpdates$).toBe(expectedTimeline, {
        a: initialState
      });
      flush();

      nameStore.updateState(s => ({ ...updatedState }));

      expectObservable(nameUpdates2$).toBe(expectedTimeline2, {
        b: updatedState
      });
      flush();

      expect(lastValue).toEqual(updatedState);
    });
  });
});
