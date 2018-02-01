import React from "react";
import Todo from "../components/Todos/Todo";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Todo", () => {
  let props, wrapper;
  beforeEach(() => {
    props = {
      index: 0,
      text: "todo-1",
      completed: false,
      changeTodoState: jest.fn(),
    };
    wrapper = shallow(<Todo {...props} />);
  });
  afterEach(() => {
      wrapper.unmount();
  })
  // 通过 input 是否存在来判断 Todo组件是否被渲染
  it("Todo item should  render", () => {
    expect(wrapper.find("input").exists());
  });

  // 当点击 单选按钮，onClick 方法应该被调用
  it("click checkbox input, onClick called", () => {
    const mockEvent = {
      key: "Click",
      preventDefault: jest.fn()
    };
    wrapper.find("input").simulate("click", mockEvent);
    expect(props.changeTodoState).toBeCalled();
  });

  // todos snapshot
  it("todos snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("done snapshot", () => {
    props = Object.assign(props,{
      completed: true
    });
    wrapper = shallow(<Todo {...props}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
