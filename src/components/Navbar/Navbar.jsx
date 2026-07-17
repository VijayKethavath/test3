import { NavLink, useNavigate } from "react-router-dom"
import "./Navbar.css"

function Navbar(){
  const navigate = useNavigate()

  const style = ({isActive})=>{
    return {
      color:isActive?"red":"green"
    }}

    function onLogot(){
      localStorage.removeItem("user_id")
      navigate("/Login")
      
    }
  return(
    <div className="main">
      <h1>Todos List</h1>
      <div className="sub">
       <NavLink to="/" style={style} > <i>All Todos</i></NavLink>
       <NavLink to="/Completedtodos" style={style} > <i>Completed todos</i></NavLink>
       <NavLink to="/pandingtodos" style = {style}> <i>Panding Todos</i></NavLink>
        <button onClick={onLogot}>Logout</button>

      </div>
    </div>
  )
}
export default Navbar