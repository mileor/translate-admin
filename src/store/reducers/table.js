import { FETCH_TABLE_SUCCESS, DELETE_TABLE_ITEM, DELETE_TABLE_ITEM_START } from "../actions/actionTypes"

const initialState = {
    translateTableData: [],
    translateTableDataKeys: [],
    loading: true
}

export default function tableReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_TABLE_SUCCESS:
            return {
                ...state, 
                translateTableData: action.translateTableData, 
                translateTableDataKeys: action.translateTableDataKeys,
                loading: action.loading
            } 
        case DELETE_TABLE_ITEM_START:
            return {
                translateTableData: action.translateTableData,
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