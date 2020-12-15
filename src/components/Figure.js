import React from 'react'
import Box from './Box'
import { useDispatch } from 'react-redux'


export default function Figure({ card, create = false }) {
    const dispatch = useDispatch();

    const handlerClick = (e) => {
        dispatch({ type: "CHANGE_VALUE_NEW_FIGURE", payload: e.target.id })
        e.target.classList.toggle("box-active")
    }

    return (
        <div className={`figure ${create ? "figure-create" : ""}`}>
            <h3 style={{margin:"10px"}} >{card.name}</h3>
            <div className={`figure-box`}>
                {create
                    ? <React.Fragment>
                        {card.positionsWinner.map((value, index) => <Box key={index} name={index} active={value} onClick={handlerClick} ></Box>)}
                    </React.Fragment>
                    : <React.Fragment>
                        {card.positionsWinner.map((value, index) => <Box key={index} active={value} ></Box>)}
                    </React.Fragment>
                }

            </div>
        </div>
    )
}
