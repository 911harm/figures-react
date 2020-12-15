import Axios from "axios";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { API } from './Global'
const { figure, grupFigure } = API



const initialState = {
    cartons: [],
    listGrups: [],
    arr : {
        name: "new Figure",
        positionsWinner: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
}


// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CARTONS":
            return { ...state, cartons: action.payload }
        case "SET_LIST_GROUPS":
            return { ...state, listGrups: action.payload }
        default:
            return state

    }
}


const store = createStore(reducer, applyMiddleware(thunk))


export default store;


// Actions
export const getFigures = () => {
    return dispatch => {
        return Axios.get(figure).then(res => {
            dispatch({ type: "SET_CARTONS", payload: res.data.data })
        })

    };
};
export const getListG = () => {
    return dispatch => {
        return Axios.get(grupFigure).then(res => {
            dispatch({ type: "SET_LIST_GROUPS", payload: res.data.data.content })
        })

    };
};

