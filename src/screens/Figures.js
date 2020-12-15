import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Figure from '../components/Figure'
import NavBar from '../components/NavBar'
import { getFigures } from '../store';


export default function Figures() {
    const dispatch = useDispatch();
    const cartons = useSelector(state => state.cartons)
    useEffect(() => {
        if (cartons.length === 0) {
            dispatch(getFigures())
        }

    }, [dispatch, cartons])

    const handlerdelete = (e) => {
        console.log(e.target.id)
        // Ok no encontre el metodo delete :/ 
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className='figures'>
                <div className="figures-title">
                    <h2>All Figures</h2>
                    {/* <Link to={"/figure-list"}>Add Figure</Link> */}
                </div>
                <div className="figures-content">
                    {cartons.length > 0
                        ? cartons.map(card => {
                            return <React.Fragment key={card.id}>
                                <Figure key={card.id} card={card} />
                                <span className="delete" onClick={handlerdelete}><i id={card.id} className="fa fa-trash"></i></span>
                            </React.Fragment>
                        })
                        // .slice(0, 20)
                        : <div> Loading...</div>
                    }
                </div>
            </div>
        </div>
    )
}
