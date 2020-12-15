import React from 'react'
import { Link } from 'react-router-dom'

export default function NoFound() {
    return (
        <div className="not-found">
            <h2>Error 404</h2>
            <Link className="btn" to="/myprofile">Go Profile</Link>
        </div>
    )
}
