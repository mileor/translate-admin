import { CHANGE_ROLE_SUCCESS, FETCH_NAV_SUCCESS, CHOICE_ROLE_SUCCESS, CHANGE_ROLE_START } from "../actions/actionTypes"

const initialState = {
    rolesData: {},
    loading: true
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
                loading: action.loading
            } 
        case CHANGE_ROLE_SUCCESS:
            return {
                ...state, 
                rolesData: action.rolesData, 
                loading: action.loading
            } 
        case CHANGE_ROLE_START:
            return {
                ...state, 
                loading: action.loading
            } 
        default:
            return state
    }
}