import React from 'react'

export default function Box({active}) {
    return (
        <div className={`box ${active?"box-active":""}`}>
            
        </div>
    )
}
