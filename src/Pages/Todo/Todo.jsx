import React, { useEffect, useState } from "react";
import TodoCard from "./Components/TodoCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTodoData } from "../../redux/Slices/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);
  const postinte = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getTodoData());
  }, []);

  if (todoState.isError) {
    return <p>Something went wrong</p>;
  }
  if (todoState.isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col gap-6 ">
      {todoState.todoList.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todo;
