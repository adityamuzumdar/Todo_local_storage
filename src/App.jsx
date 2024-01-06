import { useContext, useState, useEffect } from 'react'
import Addtodo from './components/Addtodo'
import Displaytodo from './components/Displaytodo'
import { TodoProvider } from './contexts/Todocontext'


function App() {

  const [todos,setTodos]= useState([]);

  const addTodo=(todo)=>{
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }
  const deleteTodo = (id) => {
    const updatedTodos = [];
    for (let i = 0; i < todos.length; i++) {
      // Check if the current todo's id is not equal to the provided id
      if (todos[i].id !== id) {
        updatedTodos.push(todos[i]); // Add the todo to the updated array
      }
    }
    setTodos(updatedTodos); // Set the todos to the updated array without the todo with the given id
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo }}>
     
      <div className='bg-slate-800 h-screen'>
      <h1 className="text-2xl font-bold text-center mb-1 p-10 text-white">Get Them Done!</h1>
        <div className='max-w-xl mx-auto'>
          <Addtodo />
          {todos.map((todo) => (
            <div key={todo.id}>
              <Displaytodo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
