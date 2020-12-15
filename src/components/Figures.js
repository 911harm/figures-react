import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Figure from './Figure'
import { getFigures } from '../store';


export default function Figures() {
    const dispatch = useDispatch();
    const cartons = useSelector(state => state.cartons)
    useEffect(() => {
        if (cartons.length === 0) {
            dispatch(getFigures())
        }

    }, [dispatch,cartons])

    return (
        <div className='figures'>
            <div className="figures-title">

                <Link to={"/figure-list"}>Add Figure</Link>
            </div>
            <div className="figures-content">
                {cartons.length > 0
                    ? cartons.map(card => (<Figure key={card.id} card={card} />)).slice(0, 20)
                    : <div> Loading...</div>
                }
            </div>
        </div>
    )
}
