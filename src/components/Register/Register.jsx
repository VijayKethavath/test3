import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css"

function Register() {
  const[err,seterr]=useState(false)
  const [email, setemail] = useState("");
  const [Username, setusername] = useState("");
  const [Password, setpassword] = useState("");

  const onRegister = async(event) => {
    event.preventDefault();
    try {
      const newuser={Username,email,Password}
      console.log(newuser);

      let data=await fetch(`https://todos-wibl.onrender.com/user?email=${email}`);
      let jsondata = await data.json();
      console.log(jsondata);
      

      if(jsondata.length!=0){
         seterr(true)
         return
      }
      seterr(false)


      let res = await fetch("https://todos-wibl.onrender.com/user",{
        method:"POST",
        headers:{
          "content-Type":"application/json"
        },
        body:JSON.stringify(newuser)
        
      })
      if(res.ok){
        alert("SignUp successfully");
        console.log(res);
        
      }
      else{
        console.log("Error");
        
      }
      
    } catch (error) {
      console.log(error);
      
    }
    
  };
  return (
    <div className="log">
    <h1 className="head">Welcome to Todo App</h1>
      <form onSubmit={onRegister} className="from">
        <h1>Register</h1>
        <label>UserName </label>
        <input
          type="name"
          placeholder=" Enter Username"
          onChange={() => setusername(event.target.value)}
        />
        <br />
        
        <label>Email </label>
        <input
          type="email"
          placeholder=" Enter Email"
          onChange={() => setemail(event.target.value)}
        />
        <br />
        
        <label>Password </label>
        <input
          type="password"
          placeholder=" Enter Password"
          onChange={() => setpassword(event.target.value)}
        />
        <br />
        {err && <p style={{color:"red"}}>Already exist</p>}
        <button type="submit" className="btn">SignUp</button>
        <p>Have an Account <Link to="/Login">Login Here</Link></p>
      </form>
    </div>
  );
}
export default Register;
