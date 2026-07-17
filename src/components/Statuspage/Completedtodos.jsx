import { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import { Navigate } from "react-router-dom"


function Completedtodos(){
  if(localStorage.getItem("user_id")==null){
    return <Navigate to="/login"/>
  }
  const[data,setdata] =useState([])

  async function getData(){
    try {
    let userId = localStorage.getItem("user_id")
    let res = await fetch(`http://localhost:5000/todos?uersId=${userId}&isCompleted=true`)
    let jsondata = await res.json()
    setdata(jsondata)
  } catch (error) {
    console.log(error)
  }
  }
  useEffect(()=>{
    getData()
  },[])
  return(
    <div>
       <Navbar/>
       {
        data.length == 0?(
          <h1>No completed Todos</h1>
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
export default Completedtodos