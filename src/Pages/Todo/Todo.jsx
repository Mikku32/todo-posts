import React, { useEffect, useState } from "react";
import TodoCard from "./Components/TodoCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsTodoError,
  setIsTodoLoading,
  setTodoList,
} from "../../redux/Slices/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        dispatch(setTodoList(res.data));
      } catch (error) {
        dispatch(setIsTodoError(true));
      } finally {
        dispatch(setIsTodoLoading(false));
      }
    };

    getData();
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
