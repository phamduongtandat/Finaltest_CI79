import React from 'react'
import { Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <div>
                <h3 className="text-center">#todo</h3>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to='/' className="nav-link">All</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Active' className="nav-link">Active</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Completed' className="nav-link">Completed</Link>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Header
