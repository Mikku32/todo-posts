import React, { useEffect, useState } from "react";
import TodoCard from "./Components/TodoCard";
import axios from "axios";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodoList(res.data);
      } catch (error) {
        setIsError(true); 
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);
  if (isError) {
    return <p>Something went wrong</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col gap-6 ">
      {todoList.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todo;
