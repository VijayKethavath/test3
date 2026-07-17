import { useEffect, useState } from "react";

function Alltodos() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function getAlltodos() {
      try {
        let userId = localStorage.getItem("user_id");
        // console.log(userId);
        let res = await fetch(`https://todos-wibl.onrender.com/todos?uersId=${userId}`);
        let jsonData = await res.json();
        setdata(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log(error);
      }
    }
    getAlltodos();
  }, [data]);

  async function onDlt(id) {
    let del = await fetch(`https://todos-wibl.onrender.com/todos/${id}`, {
      method: "DELETE", });
    if (del.ok) {
      alert("Deleted");
    } else {
      alert("Not Deleted Error");
    }
  }

  async function onComp(item) {
    try {
      let res = await fetch(`https://todos-wibl.onrender.com/todos/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isCompleted: !item.isCompleted,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      {data.length == 0 ? (
        <h1>No Todo Added yet</h1>
      ) : (
        data.map((item) => (
          <div key={item.id}>
            <h1>{item.todo}</h1>
            <button onClick={() => onComp(item)}>
              {item.isCompleted ? "Mark as Panding" : "Mark as complete"}
            </button>
            <button onClick={() => onDlt(item.id)}>Delete</button>
            <p>{item.date}</p>
          </div>
        ))
      )}
    </div>
  );
}
export default Alltodos;
