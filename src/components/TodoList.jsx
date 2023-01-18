import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddTodo from './AddTodo'
import Form from './Form'
import TodoRow from './TodoRow'

const TodoList = ({list, setList}) => {
  return (
    <div className='w-[85%] mx-auto'>
        <h3>Things to do</h3>
        {
            list.map((task,index) => (
                <TodoRow key={index} task={task}/>
            ))
        }
        <Routes>
            <Route path='/' element={ <AddTodo />}></Route>
            <Route path='/addForm' element={<Form list={list} setList={setList}/> }></Route>
        </Routes>
    </div>
  )
}

export default TodoList