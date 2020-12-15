import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="navBar">
            <React.Fragment>
                <Link to="/myprofile">Profile</Link>
                <Link to="/figures">Figures</Link>
                <Link to="/figure-list">Add Figure</Link>
                <Link onClick={() => localStorage.clear()} to="/">Logout</Link>
            </React.Fragment>
            {/* <Link to="/">Login</Link> */}
        </div>
    )
}
