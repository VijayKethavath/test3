import { useState } from "react";
import Alltodos from "./Alltodos";
import Navbar from "../Navbar/Navbar"
import { Navigate } from "react-router-dom";
import "./Todo.css"


function Todos(){
 if(localStorage.getItem("user_id")==null){
  return <Navigate to="/Login"/>
 }
  const[todo,setdata] = useState("")

  const onbtn=async()=>{
    try {
    const data = new Date()
      let task={
        todo,
        date:data.toLocaleString(),
        isCompleted:false,
        uersId:localStorage.getItem("user_id")
      }

      let res = await fetch("https://todos-wibl.onrender.com/todos",{
        method:"POST",
        headers:{
          "Content-Tpye":"application/json"
        },
        body:JSON.stringify(task)
      })

      if(res.ok){
        alert("Added Todo")
      }
      else{
        alert("Fail")
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  return(
    <div className="todo">
        <Navbar/>
        <div className="todobox">
        <input type="text" placeholder="Enter Todo" onChange={()=>setdata(event.target.value)} />&nbsp;
        <button onClick={onbtn}>Add</button>
        <Alltodos/>
        </div>
    </div>
  )
}
export default Todos;