import React from 'react'

export default function Box({active,onClick}) {
    return (
        <div onClick={onClick} className={`box ${active?"box-active":""}`}>
            
        </div>
    )
}
