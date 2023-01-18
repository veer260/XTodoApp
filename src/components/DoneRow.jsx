import React, { useState } from 'react'

const DoneRow = ({task, checked, incompleteList, setIncompleteList}) => {
    console.log('incompleteList:', incompleteList)
    const [done, setDone] = useState(checked);
    const handleChange = (event) => {
        console.log(event.target);
        console.log(incompleteList);
        setDone(event.target.checked);
        let newList = [...incompleteList];
        newList.push(task);
        setIncompleteList(newList);
    }
    
  return (
    <div>
        {
        done && (
        <div className='flex'>
            <input onChange={handleChange}
            className='accent-red-500' checked={done} type="checkbox" id="check"/>
            <label className='sr-only' htmlFor='check' >Checkbox</label>
            <p>{task}</p>
        </div>
            )
        }
    </div>
    
  )
}

export default DoneRow