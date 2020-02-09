import { CHANGE_ROLE_SUCCESS, FETCH_NAV_SUCCESS, CHOICE_ROLE_SUCCESS } from "../actions/actionTypes"

const initialState = {
    rolesData: {}
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case CHOICE_ROLE_SUCCESS:
            return {
                ...state,
                rolesData: action.rolesData, 
            } 
        case FETCH_NAV_SUCCESS:
            return {
                ...state, 
                rolesData: action.rolesData, 
            } 
        case CHANGE_ROLE_SUCCESS:
            return {
                ...state, 
                rolesData: action.rolesData, 
            } 
        default:
            return state
    }
}