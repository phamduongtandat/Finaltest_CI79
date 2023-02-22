import React, { useContext } from 'react'
import { Context } from '../App'

function Footer() {
    const { handleClearTasks } = useContext(Context)
    return (
        <div style={{ margin: 'auto', width: '300px', display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={handleClearTasks} type="button" className="btn btn-danger"><i class="fa-solid fa-trash-can"></i>&emsp;Delete All</button>

        </div>
    )
}

export default Footer
