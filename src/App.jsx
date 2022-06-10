import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import ListContainer from "./ListContainer";
import { useDispatch } from "react-redux";

import tasks from "../fixtures/tasks";

import { setTasks } from "./actions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(tasks));
  }, []);

  return (
    <div>
      <h1>To-do</h1>
      <ListContainer />
    </div>
  );
}
