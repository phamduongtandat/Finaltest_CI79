import React, { useContext } from 'react'
import { Context } from '../App'

function TaskItem({ job }) {
    const { handleRemove } = useContext(Context)
    return (
        <div style={{ paddingTop: 15, margin: 'auto', width: '300px', justifyContent: 'space-between' }} className="  d-flex">
            <div className="d-flex" ><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <li style={{ paddingLeft: '25px' }} >{job}</li></div>
            <div onClick={() => handleRemove(job)} style={{ cursor: 'pointer', }}><i className="fa-solid fa-trash"></i></div>
        </div>

    )
}

export default TaskItem
