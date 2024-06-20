import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()
  return (
    <div className="flex justify-center gap-6 my-4  p-2">
      <p className="text-3sm font-bold hover:cursor-pointer hover:text-blue-500 hover:scale-125 transition-all"
      onClick={() =>{
        navigate("/")
      }}
      >
        toDo
      </p>
      <p  className="text-3sm font-bold hover:cursor-pointer hover:text-red-500 hover:scale-125 transition-all"
      onClick={() =>{
        navigate("/posts")
      }}>Posts</p>
     </div>
  )
}

export default NavBar
