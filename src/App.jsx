import { Route, Routes, useNavigate } from "react-router-dom"
import Post from "./Pages/Post/Post"
import Todo from "./Pages/Todo/Todo"
import NavBar from "./Components/NavBar"


function App() {
  
  

  return (
    <>
    <NavBar/>

     <Routes>
      <Route path="/" element={<Todo/>} />
      <Route path="/posts" element={<Post />} />

      
     </Routes>
    </>
  )
}

export default App
