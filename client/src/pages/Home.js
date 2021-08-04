import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  const [todos, setTodos] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const getApi = async () => {
      //get Todos
      const { data } = await axios.get("http://localhost:4000/todos");
      setTodos(data.todos);
    }
    getApi();
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    setTodos(prev => [...prev, { id: prev.length + 1, text }])
  }

  //console.log(todos)
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "yellow" }}>
      <form onSubmit={onSubmit} style={{ display: "flex" }}>
        <input type="text" placeholder="Write new todo." value={text} onChange={e => setText(e.target.value)} />
        <button>Add Todo</button>
      </form>
      <h1>Todos</h1>
      {
        todos?.map((todo) => (
          <h4 key={todo.id}>
            <Link to={{
              pathname: `/todo/${todo.id}`,
              state: {
                id: todo.id,
                text: todo.text
              }
            }}>
              {todo.text}
            </Link>
          </h4>
        ))
      }
    </div>
  )
}
