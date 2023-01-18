import React, { useState } from 'react'
import Header from './Header';
import TodoList from './TodoList';

const Content = () => {
    console.log('content running');
    const [compltetList, setCompleteList ] = useState([
        'Clean my Computer',
        'Buy a keyboard'
    ])
    const [incompleteList, setIncompleteList] = useState([
        'Write an article'
    ]);

  return (
    <div>
        <Header />
        <TodoList list={compltetList} setList={setCompleteList} />
    </div>
  )
}

export default Content