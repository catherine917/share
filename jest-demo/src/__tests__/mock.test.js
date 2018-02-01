import forEach from '../demo/mock';
import action from '../demo/async';

it("mock function", () => {
  const mockCallback = jest.fn(value => value + 20);
  expect(mockCallback).not.toHaveBeenCalled();

  forEach(['a', 'b'], mockCallback);
  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback).toHaveBeenCalledTimes(2);

  expect(mockCallback.mock.calls[0]).toEqual(['a']);
  expect(mockCallback).toHaveBeenCalledWith('a');

  expect(mockCallback.mock.calls[1]).toEqual(['b']);
  expect(mockCallback).toHaveBeenCalledWith('b');
  mockCallback.mockClear();
});

it("mock instances", () => {
  const mockFn = jest.fn();
  const c = new mockFn();
  const d = new mockFn();
  console.log(mockFn.mock.instances[0] === c);
  console.log(mockFn.mock.instances[1] === d);
});

it("mock spyOn", () => {
    const mockFn = jest.spyOn(action,'getCallBack');
    action.getCallBack(4,mockFn);
    expect(mockFn).toHaveBeenCalled();
    mockFn.mockRestore();
});

it("mock mockImplementation", () => {
    const mockFn = jest.fn(value => value + 20);
    const mockFn1 = jest.fn().mockImplementation(value => value + 20);
    const mockFn2 = jest
      .fn(() => "default")
      .mockImplementationOnce(() => "first call")
      .mockImplementationOnce(() => "second call");

    const a = mockFn(0);
    expect(a).toBe(20);
    expect(mockFn2()).toBe('first call');
    expect(mockFn2()).toBe('second call');
    expect(mockFn2()).toBe('default');
})

it("mock value", () => {
    const mockFn = jest.fn();
    console.log(mockFn());

    mockFn.mockReturnValueOnce('test');
    console.log(mockFn());
    console.log(mockFn());
    mockFn.mockReturnValue(100);
    console.log(mockFn());
    console.log(mockFn());
});

