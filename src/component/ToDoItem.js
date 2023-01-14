import React from 'react'

export const ToDoItem = (props) => {
    
    
  return (
    <li onClick={() => props.onCheck(props.id)} >{props.text}</li>
  )
}
