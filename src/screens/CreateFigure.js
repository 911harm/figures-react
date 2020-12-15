import React, { useEffect } from 'react'
import Figure from '../components/Figure'
import NavBar from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { getListG } from '../store'
import Axios from 'axios';
import { API } from '../Global'
import swal from 'sweetalert';

const { postFigure } = API



export default function CreateFigure(props) {
    const dispatch = useDispatch();
    let { arr, listGrups, newFigure } = useSelector(state => state)
    arr = {
        name: newFigure.figureName || "New Figure",
        positionsWinner: newFigure.position
    }

    useEffect(() => {

        if (listGrups.length === 0) {
            dispatch(getListG())
        }
    }, [dispatch, listGrups])

    const createFigure = () => {
        if (!newFigure.figureName) {
            return swal({
                title: "Error",
                text: "Name invalid",
                icon: "error",
                button: "OK",
            });
        }
        Axios.post(postFigure, newFigure)
            .then(res => {
                swal({
                    title: "Success",
                    text: "Create New Figure",
                    icon: "success",
                    button: "OK",
                });
                dispatch({ type: "RESET_VALUES_NEW_FIGURE" })
                props.history.push('/figures');
            })
            .catch(err => {
                swal({
                    title: "Error",
                    text: err,
                    icon: "error",
                    button: "OK",
                });
            }
            )
    }

    const handlerGroup = (e) => {
        dispatch({ type: "CHANGE_GROUP", payload: e.target.value })
    }
    const handlerName = (e) => {
        dispatch({ type: "CHANGE_NAME", payload: e.target.value })
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="list-figures">

                {(listGrups.length > 0)
                    ? <React.Fragment>
                        <div className="add-figure-title">

                            <span>Select Group </span>

                            <select className="input" onChange={handlerGroup}>
                                {listGrups.map(item => (<option key={item.id} value={item.id} >{item.name}</option>))}
                            </select>
                            <span>and</span>
                            <input className="input" type="text" onChange={handlerName} name="FigureName" value={newFigure.figureName} placeholder={"Name"} />
                            <hr />
                            <Figure card={arr} create={true}></Figure>
                            <button className="btn" onClick={createFigure}>Create</button>
                        </div>
                    </React.Fragment>
                    : <div> Loading...</div>
                }
            </div>
        </div>
    )
}
