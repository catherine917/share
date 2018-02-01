import http from "http";

export default function request(url) {
  return new Promise((resolve,rejects) => {
    // 这是一个HTTP请求的例子, 用来从API获取用户信息
    // This module is being mocked in __mocks__/request.js
    http.get({ path: url }, response => {
      let data = "";
      response.on("data", _data => (data += _data));
      response.on("end", () => resolve(data));
    });
  });
}
