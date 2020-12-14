import React from 'react'
import Box from './Box'

export default function Figure({ card, create = false }) {
    const handlerClick = (e) => {
        console.log(e)
    }
    return (
        <div className={`figure ${create ? "figure-create" : ""}`}>
            {card.name}
            <div className={`figure-box`}>
                {create
                    ? <React.Fragment>
                        {card.positionsWinner.map((value, index) => <Box key={index} active={value} onClick={handlerClick} ></Box>)}
                    </React.Fragment>
                    : <React.Fragment>
                        {card.positionsWinner.map((value, index) => <Box key={index} active={value} ></Box>)}
                    </React.Fragment>
                }

            </div>
        </div>
    )
}
