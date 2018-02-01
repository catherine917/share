import React from "react";
import AddTodo from "../components/Todos/AddTodo";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

describe("AddTodo", () => {
  let props, wrapper;
  beforeEach(() => {
    props = {
      // Jest 提供的mock 函数
      onAddClick: jest.fn(e => {})
    };
    // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
    wrapper = shallow(<AddTodo {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  // case1
  // 通过查找是否存在 Input,测试组件正常渲染
  it("AddTodo Component should render", () => {
    //.find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
    // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
    expect(wrapper.find("input").exists());
  });

  // case2
  // 输入内容并敲下回车键，测试组件调用props的方法
  it("When the Enter key was pressed, onAddClick() shoule be called", () => {
    // mock input 输入和 Enter事件
    const mockEvent = {
      keyCode: 13, // enter 事件
      target: {
        value: "Test"
      },
      preventDefault: jest.fn()
    };
    // 通过 Enzyme 提供的 simulate api 模拟 DOM 事件
    wrapper.find("input").simulate("keyup", mockEvent);
    // 判断 props.onAddClick 是否被调用
    expect(props.onAddClick).toBeCalled();
  });

  // case3
  // 没有输入内容并敲下回车键，测试组件没有调用props的方法
  it("When the Enter key was pressed without text, onAddClick() shoule not be called", () => {
    // mock input 输入和 Enter事件
    const mockEvent = {
      keyCode: 13, // enter 事件
      target: {
        value: undefined
      },
      preventDefault: jest.fn()
    };
    // 通过 Enzyme 提供的 simulate api 模拟 DOM 事件
    wrapper.find("input").simulate("keyup", mockEvent);
    // 判断 props.onAddClick 是否被调用
    expect(props.onAddClick).not.toBeCalled();
  });

  // case4
  // 创建完成后，input框被晴空
  it("input value should be empty when todo is created", () => {
    const mockEvent = {
      keyCode: 13, // enter 事件
      target: {
        value: "Test"
      },
      preventDefault: jest.fn()
    };
    // 通过 Enzyme 提供的 simulate api 模拟 DOM 事件
    wrapper.find("input").simulate("keyup", mockEvent);
    expect(mockEvent.target.value === "");
  });
  // 如果没有点击回车，onAddClick方法应该不会被触发
  it("When other key was pressed, onAddClick() should not be called", () => {
    const mockEvent = {
      keyCode: 8,
      preventDefault: jest.fn()
    };
    wrapper.find("input").simulate("keyup", mockEvent);
    expect(props.onAddClick).not.toBeCalled();
  });

  // snapshot
  it("AddTodo snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
