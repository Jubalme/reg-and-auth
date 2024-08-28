import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./components/Register.jsx"
function App() {


  return (
    <>
     <BrowserRouter>
         <Routes>
           <Route path="/signup" element={<Register />} />
           

   </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default App
