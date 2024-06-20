import React, { useState } from 'react'

const TodoCard = ({todo}) => {

    const [isChecked, setIsChecked] = useState(todo.completed)
    
  return (

    
    
    <div className="flex  gap-6 bg-slate-400 p-2">
      <p className="text-3sm font-bold">{todo.title}</p>
      <input type="checkbox" checked={isChecked} 
      onChange={() => {
        setIsChecked(!isChecked)
      }}
      />
    </div>
 
  )
}

export default TodoCard
