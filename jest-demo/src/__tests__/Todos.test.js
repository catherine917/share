import '../setupTests';
import React from "react";
import Todos from "../components/Todos/index";
import { mount } from "enzyme";

describe("Todos", () => {
  let props, wrapper;
  beforeEach(() => {
    // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
    wrapper = mount(<Todos/>);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  // 新增一条todo记录
  it("todos add todo", () => {
    const mockEvent = {
      keyCode: 13, // enter 事件
      target: {
        value: "test4"
      },
      preventDefault: jest.fn()
    };
    // 通过 Enzyme 提供的 simulate api 模拟 DOM 事件
    wrapper.find(".todo-input").simulate("keyup", mockEvent);
    expect(wrapper.find("li").length).toBe(4);
  });
  // 点击checkbox 切换todo状态
  it("todos checked", () => {
    const mockEvent = {
        key: "Click",
        preventDefault: jest.fn()
      };
    wrapper.find("[type='checkbox']").at(0).simulate("keyup", mockEvent);
    expect(wrapper.find(".completed").length === 1);
    wrapper.find("[type='checkbox']").at(0).simulate("keyup", mockEvent);
    expect(wrapper.find(".completed").length === 0);
  })
});
