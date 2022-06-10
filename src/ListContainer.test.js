import React from "react";
import { render } from "@testing-library/react";
import ListContainer from "./ListContainer";
import { useSelector } from "react-redux";
import tasks from "../fixtures/tasks";

jest.mock("react-redux");

describe("ListContainer", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      tasks,
    })
  );
  it("renders tasks", () => {
    const { container } = render(<ListContainer />);
    expect(container).toHaveTextContent("아무 일도 하기 싫다");
  });
});
