import React from 'react'
import TodoElement from './TodoElement'
 import { useSelector } from 'react-redux'

const TodoList = () => {
   const todo = useSelector(state=>state.todo)
  return (
    <div>
      {todo.map((el)=>( <TodoElement todos={el}/>))}
    </div>
  )
}

export default TodoList
