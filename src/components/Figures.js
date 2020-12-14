import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Figure from './Figure'
// import { API } from '../Global'
// const { figure, grupFigure } = API

export default function Figures() {
    const [cartons, setCartons] = useState([])
    useEffect(() => {
        Axios.get("https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/figure")
            .then(res => setCartons(res.data.data))
            
        

    }, [])

    return (
        <div className='figures'>
            <div className="figures-title">
                
                <Link to={"/figure-list"}>Add Figure</Link>
                </div>
            <div className="figures-content">
            {cartons.length>0
            ?cartons.map(card=>(<Figure key={card.id} card={card}/>)).slice(0,20)
            : <div> Loading...</div>
                }
            </div>
        </div>
    )
}
