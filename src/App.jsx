import { useState } from 'react'
import './App.css'
import Home from "./Components/Home"
import Menu from "./Components/Menu"
import About from "./Components/About"

function App() {
  const [firstPage, setFirstPage] = useState("");
  const handleChange = (val) =>{
    setFirstPage(val);
  }

  return (
    <>
      {firstPage==="" && <Home handleChange={handleChange} /> }
      {firstPage==="about" && <About /> }
      {firstPage==="menu" && <Menu /> }
    </>
  )
}

export default App
