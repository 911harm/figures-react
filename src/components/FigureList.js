import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import Figure from './Figure'

export default function FigureList() {
    const arr = {
        name:"new Figure",
        positionsWinner:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}

    const [list, setList] = useState([])
    useEffect(() => {
        Axios.get("https://java.bocetos.co/gamered-0.0.1-SNAPSHOT//groupfigure/paged?size=20&page=0")
            .then(res => setList(res.data.data.content))

    }, [])
    return (
        <div className="list-figures">

            {(list.length > 0)
                ? <React.Fragment>
                    <div className="add-figure-title">
                    <select>
                        {list.map(item => (<option key={item.id} value={item.name} >{item.name}</option>))}

                    </select>
                    <Figure card={arr} create={true}></Figure>
                    </div>
                </React.Fragment>
                : <div> Loading...</div>
            }
        </div>
    )
}
