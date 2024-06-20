import React, { useState } from 'react'
import TodoCard from './Components/TodoCard'

const Todo = () => {

  



  return (

    <div className="flex flex-col gap-6 ">
     { dummyTodo.map((todo) => (
        <TodoCard key={todo.id} todo={todo}/>
      ))}

    </div>

  )}

  

export default Todo



const dummyTodo = [
  {
    userId:1,
    id: 1,
    title: "Do something",
    completed: false

  },
  {
    userId:1,
    id: 2,
    title: "Study the course",
    completed: true
  },
  {
    userId:2,
    id: 3,
    title: "do Homeworks",
    completed: false
  }
]




