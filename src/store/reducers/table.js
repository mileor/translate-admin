import { FETCH_TABLE_SUCCESS, DELETE_TABLE_ITEM } from "../actions/actionTypes"

const initialState = {
    translateTableData: [],
    translateTableDataKeys: [],
}

export default function tableReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_TABLE_SUCCESS:
            return {
                ...state, 
                translateTableData: action.translateTableData, 
                translateTableDataKeys: action.translateTableDataKeys
            } 
        case DELETE_TABLE_ITEM:
            return {
                ...state, 
                translateTableData: action.translateTableData, 
                translateTableDataKeys: action.translateTableDataKeys
            }
        default:
            return state
    }
}