<<<<<<< HEAD
import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(); //initalize with an empty array
  const [editingId, setEditingId] = useState(""); //state for the todo to be edited
  const [editingtext, setEditingText] =useState(""); //state for edit input

  // const [newToDo, setNewTodo] = setState("")

  //Fetch TodOS from the backend
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/gettodods",
    })
      .then((res) => {
        console.log("res", res);
        setData(res.data);
      })
      .catch((err) => console.log("err", err));
  }, []);


const handleOnDelete = (e) => {
  console.log("e", e.target.id)

}
//Add new Todo
const handleAddToDo = () => { 
  if (!newTodo.trim()) return; // prevent empty todos
const ToDoItem = {ToDo: newToDo, created: new Date() };

axios
.post ("http://localhost:3000/create", ToDoItem) //sends it to the back end
.then((res) => { 
setData([...data, res.data]); //update the todos list to the state
setNewToDo("") //clear input field
})
.catch((err) => console.log("Error adding todo", err));
}; 

//delete a todo
const handleDelete = (id) => { 
console.log("Delete todo with ID:", id)//debug
  axios 
  .delete(`http://localhost:3000/delete/${id}`)
  .then((res) => { 
    console.log("Todo Deleted:", res.data);//filter out the deleted item from the state
    setData(data.filter((item)=> item._id !== id)); //remove from UI
  })
  .catch((err) => console.log("Error deleting todo:", err)); 
}; 

//start editing a todo
const HandleEdit = (id, currentToDo) => { 
  setEditingId(id); //set the id of the todo being edited
  setEditingText(currentToDo); //set the current text to the input field
}; 

//save edited todo
const HandleSave = (id) => { 
  axios
  .put(`http://localhost:3000/update/${id}`), //send updated text to backend
  setData(ToDo.editingText)
  
  .then((res)=>{ 
    console.log("Todo Updated:", res); //refresh the list from the server after updating
    axios 
    .get(`http://localhost:3000/gettodos/${id}`)
    setData(res.data)
    .then((res) => { 
      console.log("Updated List", res.data)
      setData(res.data); //updated the state with the refreshed list
    }) 
    .catch((err) => console.log("Fetch Error after Update", err));
setEditingId(null); //exit edit mode
setEditingText(""); //clear edit text state 
    })
    .catch((err)=> console.log("Error updating todo:", err)); 
  }; 
  return (
    <div>
      <h1>To-Do-Matic</h1>
      {console.log("newToDo", newToDo)}          
            {/* input field and button for adding new todo */}
            <div style={{marginBotton: "20px"}}>
              <input type="text" placeholder="Enter new todo" value={newToDo} onChange={(e)=>setNewToDo(e.target.value)} style={{marginRight:"10px", padding:"5px"}}/> 
              <button onClick={(e)=> handleAddToDo(e)} Style={{padding:"5px"}}>Add Todo</button>
              </div>
            {/* /display todos */}
            {console.log("data", data)}
            {data &&
              data.map((item)=> (
                <div 
                key={item._id}
                style={{border:"2px solid red", margin:"10px", padding: "10px"}}>
              {editingId === item._id ? (
                //edit mode
                <div>
                  <input type="text" volume={editingText} onChange={(e) => setEditingText=(e.target.value)} style = {{marginRight:"10px"}}
                />
                <button onClick={()=> HandleSave(item._id)} style={{padding:"5px"}}>Save</button>
                <button onClick={()=> setEditingId(null)} style={{padding:"5px"}}>Cancel</button> 
                </div>
              ):(
              //normal todo display
              <div>
              <p>{item.ToDo}</p> 
              <button onClick={()=> handleDelete(item._id)} style={{padding:"5px"}}>Delete</button>
              <button onClick={()=> HandleEdit(item._id, item.ToDo)} style={{padding:"10px"}}>Cancel</button>
            </div>
          )}
          </div>
        ))}
     </div>   
  );
=======
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  // const [count, setCount] = useState(0)

  const [data, setData] = useState()

  const [newToDo, setNewToDo] = useState(
    {
      todo: "",
      created: Date.now()
    }
  )


  useEffect(() => {
    console.log("useEFFECT TRIGGERED")
  }, [data])


  useEffect(() => {

    axios({
      method: "get",
      url: "http://localhost:3000/gettodos"
    })
      .then(res => {
        console.log("res", res)
        // console.log("sorted", sorted)
        setData(res.data)

      })
      .catch(err => console.log("err", err))

  }, [])

  const handleNewToDo = (e) => {

    console.log("handleNewToDo Hit", e)
    console.log("handleNewToDo Hit", e.target)
    console.log("handleNewToDo Hit", e.target.value)

    setNewToDo((prev) => ({
      ...prev,
      todo: e.target.value
    }))


  }
  const handleSubmit = (e) => {

    console.log("HandleSubmit HIT", newToDo)

    console.log("i am getting stuff")
    axios({
      method: "post",
      url: "http://localhost:3000/create",
      data: newToDo
    })
      .then(res => {
        console.log("res", res)
        // setNewToDo({todo: ""})
      })
      .catch(err => console.log(reportError))

  }

  const handleDelete = (e) => {
    console.log("DEL Hit", e.target.id)

    axios({
      method: "delete",
      url: `http://localhost:3000/delete/${e.target.id}`
    })
    .then(res => {
      console.log("re", res)
      console.log(res.data._id)
      setData((prev) => prev.filter((item) => item._id != res.data._id))
    })
    .catch(err => console.log(err))
  }




return (
  <>
    {console.log("data", data)}
    {console.log("newToDo", newToDo)}

    <input value={newToDo.todo || ""} onChange={(e) => handleNewToDo(e)} />

    <button onClick={(e) => handleSubmit(e)}>Submit</button>


    {data && data.sort((a,b) =>  b.created - a.created).map((item) => {
      return (

        <div key={item._id}  style={{ marginBottom: "20px" }}>

          <div style={{ border: '2px solid red' }}>

            <p> {item.todo}</p>
            <button id={item._id} onClick={(e) => handleDelete(e)}>delete</button>
            <button>edit</button>

          </div>
        </div>
      )
    })}

  </>
)
>>>>>>> 8bd50e1112e219e9bd5745c58143b74f17dd265c
}

export default App;
