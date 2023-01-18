import React from 'react'

const TodoRow = ({task}) => {
  return (
    <div className='flex'>
        <input className='accent-red-500' type="checkbox" id="check"/>
        <label className='sr-only' htmlFor='check' >Checkbox</label>
        <p>{task}</p>
    </div>
  )
}

export default TodoRow