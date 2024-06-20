import React, { useEffect, useState } from "react";
import TodoCard from "./Components/TodoCard";

const Todo = () => {

  const [todoList, setTodoList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
   const getData = async () =>{
   try {
    const res= await fetch("https://jsonplaceholder.typicode.com/todos")


    if(!res.ok){
     throw new Error("Something went wrong")}


    const data= await res.json()

    setTodoList(data)
   } catch (error) {
   setIsError(true)
    } finally{
      setIsLoading(false)
    }
   }

   getData()
  },[]
)
if(isError){
  return <p>Something went wrong</p>
}
if(isLoading){
  return <p>Loading...</p>
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

