import React from 'react'
import Box from './Box'

export default function Figure({card}) {
    // const arr = [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1]

    return (
        <div className="figure">
            hola aqui
            <div className="figure-box">
                {card.positionsWinner.map((value,index)=><Box key={index} active={value}></Box>)

                }
            </div>
        </div>
    )
}
