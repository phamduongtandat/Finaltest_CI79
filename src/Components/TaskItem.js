import React, { useContext } from 'react'
import { Context } from '../App'

function TaskItem({ job }) {
    const { handleRemove } = useContext(Context)
    return (
        <div className=" d-flex">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <li style={{ paddingLeft: '15px' }} >{job}</li>&emsp;&emsp;&emsp;
            <div onClick={() => handleRemove(job)} style={{ cursor: 'pointer', }}><i className="fa-solid fa-trash"></i></div>
        </div>

    )
}

export default TaskItem
