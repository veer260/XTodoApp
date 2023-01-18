 import React from 'react'
import DoneRow from './DoneRow'
import TodoRow from './TodoRow'
 
 const DoneList = ({doneList, setDoneList, incompleteList, setIncompleteList}) => {
    console.log('donelist:', incompleteList)
   return (
     <div>
        <h3>Things done</h3>
        {
           doneList.map((task, index) => {
            return (
                <DoneRow task={task} key={index} checked={true} incompleteList={incompleteList} setIncompleteList={setIncompleteList} />
            )
           }) 
        }
     </div>
   )
 }
 
 export default DoneList