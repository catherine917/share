import action from '../demo/async';

it('works with callback', done => {
  function callback(data){
    expect(data).toEqual({ name: "Mark" });
    done();
  }
  action.getCallBack(4,callback);
});

it('works with promises', () => {
   return action.getPromise(4).then(data => expect(data).toEqual({ name: "Mark" }));
});

it('works with resolves', () => {
  expect(action.getPromise(4)).resolves.toEqual({ name: "Mark" });
});

it('works with rejects', () => {
  expect(action.getPromise(1)).rejects.toEqual({error: "error"});
});

it("works with async/await", async () => {
  let data = await action.getPromise(4);
  expect(data).toEqual({ name: "Mark" });
});