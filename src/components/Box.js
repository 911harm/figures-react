import React from 'react'

export default function Box({ active, onClick, name }) {
    return (
        <div onClick={onClick} id={name} className={`box ${active ? "box-active" : ""}`}>

        </div>
    )
}
