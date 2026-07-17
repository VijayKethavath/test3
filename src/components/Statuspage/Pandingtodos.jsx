import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Navigate } from "react-router-dom";

function Pandingtodos(){
if(localStorage.getItem("user_id")==null){
    return <Navigate to="/login"/>
  }

  const[data,setdata] = useState([])

  async function getdata(){
    try {
    let userId = localStorage.getItem("user_id")
    console.log(userId);
    let res = await fetch(`https://todos-wibl.onrender.com/todos?uersId=${userId}&isCompleted=false`)
    let jsondata = await res.json()
    setdata(jsondata)
  } catch (error) {
    console.log(error)
  }
  }
  useEffect(()=>{
    getdata();
  },[data])
  return(
    <div>
      <Navbar/>
      {
        data.length == 0?(
         <h1>No Panding Todos</h1>
        ):(
           data.map(item=>(
            <div>
            <h1>{item.todo}</h1>
            <p>{item.date}</p>
            </div>
          ))
        )
      }
    </div>
  )
}
export default Pandingtodos;