import React, { useEffect } from 'react'
import Figure from './Figure'
import { useDispatch, useSelector } from 'react-redux'
import { getListG } from '../store'
export default function FigureList() {


    const dispatch = useDispatch();

    const {arr,listGrups} = useSelector(state => state)

    useEffect(() => {
        if (listGrups.length === 0) {
            dispatch(getListG())
        }
    }, [dispatch,listGrups])


    return (
        <div className="list-figures">

            {(listGrups.length > 0)
                ? <React.Fragment>
                    <div className="add-figure-title">
                        <select>
                            {listGrups.map(item => (<option key={item.id} value={item.name} >{item.name}</option>))}

                        </select>
                        <Figure card={arr} create={true}></Figure>
                    </div>
                </React.Fragment>
                : <div> Loading...</div>
            }
        </div>
    )
}
