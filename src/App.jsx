import Register from "./components/Register/Register";
import Login from "./components/login/Login";
import Alltodos from "./components/Register/Alltodos";
import Todos from "./components/Register/Todos";
import Completedtodos from "./components/Statuspage/Completedtodos";
import Pandingtodos from "./components/Statuspage/Pandingtodos";
import Single from "./components/Statuspage/Single"
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App(){
  return(
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Todos/>}/>
    <Route path="/Completedtodos" element={<Completedtodos/>}/>
    <Route path="/Pandingtodos" element={<Pandingtodos/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="*" element={<Single />}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}
export default App;