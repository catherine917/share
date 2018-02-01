import React from "react";
import TodoList from "../components/Todos/TodoList";
import { render } from "enzyme";

describe("TodoList", () => {
  let props, wrapper;
  beforeEach(() => {
    props = {
      todoList: [
        {
          text: "todo-1",
          completed: false
        },
        {
          text: "todo-2",
          completed: false
        },
        {
          text: "todo-3",
          completed: false
        }
      ],
      changeTodoState: jest.fn()
    };
    wrapper = render(<TodoList {...props} />);
  });

  it("TodoList length should be 3", () => {
    expect(wrapper.find("li").length).toBe(3);
  });
});
