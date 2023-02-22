import React, { useContext, useState } from 'react'
import { Context } from '../App'

function Input() {
    const { input, setInput, handleAdd } = useContext(Context)

    return (
        <div className="d-flex justify-content-center">
            <input className=" me-2" type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="add detail" />
            <button className="btn btn-outline-success" onClick={handleAdd} >Add</button>
        </div>

    )
}

export default Input
