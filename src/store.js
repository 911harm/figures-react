import Axios from "axios";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { API } from './Global'
const { figure, grupFigure } = API



const initialState = {
    newFigure: {
        figureName: "New Figure",
        idFigureGroup: 6,
        position: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    cartons: [],
    listGrups: [],
    arr: {
        name: "New Figure",
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
        case "CHANGE_GROUP":
            return { ...state, newFigure: { ...state.newFigure, idFigureGroup: Number(action.payload) } }
        case "CHANGE_NAME":
            return { ...state, newFigure: { ...state.newFigure, figureName: action.payload } }
        case "RESET_VALUES_NEW_FIGURE": {
            const AuxNewFigures = state.arr.positionsWinner
            return { ...state, newFigure: { figureName: "", idFigureGroup: 6, position: AuxNewFigures } }
        }
        case "CHANGE_VALUE_NEW_FIGURE": {
            const AuxNewFigure = state.newFigure.position;
            AuxNewFigure.splice(action.payload, 1, !state.newFigure.position[action.payload])
            return { ...state, newFigure: { ...state.newFigure, position: AuxNewFigure } }
        }
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
            dispatch({ type: "SET_LIST_GROUPS", payload: res.data.data })
        })

    };
};





