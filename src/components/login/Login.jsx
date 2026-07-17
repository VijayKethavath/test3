import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./login.css"

function Login(){
  const[err,seterr]=useState(false)
  const[email,setemail] = useState("")
  const[password,setpassword] = useState("")
  const navigate = useNavigate()

 async function onsubmit(event){
    event.preventDefault()
    let res = await fetch(`http://localhost:5000/user?email=${email}`)
    let jsondata = await res.json();
    // console.log(jsondata);
    
    if(jsondata.length==0){
      seterr(true)
      return
    }

    seterr(false)
    if(jsondata[0].Password == password){
      localStorage.setItem("user_id",jsondata[0].id)
        navigate("/")
        setpassword("")
        setemail("")
      // alert("added")
    }
    else{
      seterr(true)
    }
  }

  return(

   <div className="log">
    <h1 className="head">Welcome to Todo App</h1>
    <form onSubmit={onsubmit} className="from">

     <h1>LogIn</h1> 

    <label>Email </label>
    <input type="email" placeholder="Enter email" onChange={()=>setemail(event.target.value)}/> <br/>

    <label>Password </label>
    <input type="password" placeholder="Enter password" onChange={()=>setpassword(event.target.value)}/> 

    {err && <p style={{color:"red"}}>User not found</p>}

    <button className="btn"type="submit">Log in</button>
    <p>Don't have an account <Link to="/Register" >Create Account </Link></p>

    </form>
   </div>
  )
}
export default Login;