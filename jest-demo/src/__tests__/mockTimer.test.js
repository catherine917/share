import timerGame from '../demo/timerGame';
import infiniteTimerGame from '../demo/infiniteTimerGame';

jest.clearAllTimers();
jest.useFakeTimers();
it('waits 1 second before ending the game', () => {
  const timer = jest.fn();
  timerGame(timer);
  expect(timer).not.toBeCalled();
  // Fast-forward until all timers have been executed
  jest.runAllTimers();
  expect(timer).toHaveBeenCalledTimes(1);
});

it("calls the callback after 1 second via advanceTimersByTime", () => {
  const callback = jest.fn();

  timerGame(callback);

  // At this point in time, the callback should not have been called yet
  expect(callback).not.toBeCalled();

  // Fast-forward until all timers have been executed
  jest.runTimersToTime(500);

  expect(callback).not.toBeCalled();

  jest.runTimersToTime(500);
  // Now our callback should have been called!
  expect(callback).toHaveBeenCalledTimes(1);
});

it("schedules a 10-second timer after 1 second", () => {
  jest.clearAllTimers();
  jest.useFakeTimers();
  const callback = jest.fn();
  // Date.now = jest.fn(() => 1487076708000);
  // dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000);

  infiniteTimerGame(callback);

  // At this point in time, there should have been a single call to
  // setTimeout to schedule the end of the game in 1 second.
  expect(setTimeout).toHaveBeenCalledTimes(1);

  // Fast forward and exhaust only currently pending timers
  // (but not any new timers that get created during that process)
  jest.runOnlyPendingTimers();

  // At this point, our 1-second timer should have fired it's callback
  expect(callback).toBeCalled();

  // And it should have created a new timer to start the game over in
  // 10 seconds
  expect(setTimeout).toHaveBeenCalledTimes(2);
});

