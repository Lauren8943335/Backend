import React, { useState } from "react" 
import axios from "axios"
import { useEffect } from "react"


const ToDo = ({auth}) => {
  const [data, setData] = useState()
  const [flag, setFlag] = useState(false)
  const [edit, setEdit] = useState({
    todo: ""
  })

  useEffect(() => { 
 setUser(auth)
console.log("&&&&&&&******", auth)

 },[auth]     )

  const [render, setRender] = useState(false)
  const [editItemId, setEditItemId] = useState(null);
  const [user, setUser] = useState({})

  const [newToDo, setNewToDo] = useState(

    {
      todo: "",
      created: Date.now(),
      auth
      // userId: auth._id,
      // // username: auth.username,
    
    }
  )

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/gettodos"
    })
      .then(res => {
        setData(res.data)

      })
      .catch(err => console.log("err", err))

  }, [flag, render])

  const handleNewToDo = (e) => {


    setNewToDo((prev) => ({
      ...prev,
      todo: e.target.value
    }))


  }
  const handleSubmit = (e) => {


    axios({
      method: "post",
      url: "http://localhost:3000/create",
      data: newToDo

    })
      .then(res => {
        console.log("res", res)
        setNewToDo((prev) => ({
          ...prev,
          todo: ""
        }))
        setFlag(!flag)
      })
      .catch(err => console.log(err))

  }

  const handleDelete = (e) => {


    axios({
      method: "delete",
      url: `http://localhost:3000/delete/${e.target.id}`
    })
      .then(res => {
        setData((prev) => prev.filter((item) => item._id != res.data._id))
      })
      .catch(err => console.log(err))
  }

  const handleEdit = (e) => {
    setRender(!render)
    setEditItemId(e.target.id);
  }

const handleEditTodoSubmit = (e) => {
  e.preventDefault()
  console.log("handleEditTodoSubmit HIT", e.target.id)
  
  axios({
    method: "put",
    url: `http://localhost:3000/edit/${e.target.id}`,
    data: edit
  })
    .then(res => {
      console.log("$$$$$$$$", res)
      setData((prev) => {
        return prev.map((item) => {
          if (item._id === res.data._id) {
            item.ToDo = res.data.ToDo
          }
          return item 
        })
      })
      setRender(!render)
      setEditItemId(null);
      setEdit({ todo: "" });
    })
    .catch(err => console.log(err))
}

  const handleEditChange = (e) => {
    console.log("handleEditChange  HIT", e.target.value)
    setEdit({ todo: e.target.value })
  }

    return (
      
      <>
      {console.log("auth", auth)}
      {console.log("user", user)}
      <p>Todo Note Taker</p>
      <div style={{ marginBottom: "20px" }}>
        <input
          value={newToDo.todo}
          onChange={(e) => handleNewToDo(e)} />

        <button onClick={(e) => handleSubmit(e)}>New Todo</button>
      </div>

      {data && data.sort((a, b) => b.created - a.created).map((item) => {
        return (

          <div key={item._id} style={{ marginBottom: "20px" }}>

            <div id={item._id} style={{ border: '5px solid blue' }}>


              {render && editItemId == item._id
                ?
                (
                  <div>
                    <input
                      defaultValue={item.todo || ""}
                      id={item._id}
                      onChange={(e) => handleEditChange(e)}
                    >
                    </input>

                    <button
                      id={item._id}
                      onClick={(e) => handleEditTodoSubmit(e)}
                    >
                      Submit
                    </button>

                  </div>
                )
                :
                (
                  <p> {item.todo}</p>
                )
              }

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button id={item._id} onClick={(e) => handleDelete(e)}>delete</button>
                <button id={item._id} onClick={(e) => handleEdit(e)}>edit</button>

              </div>
            </div>
          </div>
        )
      })}

    </>
    )
}


export default ToDo