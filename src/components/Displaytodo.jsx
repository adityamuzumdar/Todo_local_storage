import React, { useState } from 'react'
import { useTodo } from '../contexts/Todocontext'

export default function Displaytodo({todo}) {
    
    const {deleteTodo} = useTodo()
  return (
    <div className="relative">
        <div  className="block my-5 text-white bg-sky-900 rounded-md p-4" > {todo.todo} </div>
        <button type="submit"  className="absolute end-4 bottom-4 " onClick={() => deleteTodo(todo.id)}>
        ❌
        </button>
    </div>
  )
}
