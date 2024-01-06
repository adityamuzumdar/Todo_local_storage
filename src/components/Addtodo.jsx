import React, { useState } from 'react'
import { useTodo } from '../contexts/Todocontext'

function Addtodo() {

    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()
    const add = (e) => {
      // console.log('testing');
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
    <form onSubmit={add}>

    <div className="relative">
        <input  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        value={todo}
        onChange={(e) => {setTodo(e.target.value)
        // console.log(e.target.value)
      }}
        />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700">
          Add Todo
        </button>
    </div>
    </form>
  )
}

export default Addtodo
