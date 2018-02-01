jest.mock('../request');

import * as user from '../user';

//断言必须返回一个primose
it('works with promises', () => {
  return user.getUserName('4').then(data => expect(data).toEqual('Mark'));
});