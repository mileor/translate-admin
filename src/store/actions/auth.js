import axios from "axios"
import { CHANGE_ROLE_SUCCESS, CHOICE_ROLE_SUCCESS, FETCH_NAV_SUCCESS, CHANGE_ROLE_START } from "./actionTypes"

export function fetchNav() {
    return async dispatch => {
        axios
            .get("https://translate-admin-add74.firebaseio.com/rolesData.json")
            .then((response) => {
                const rolesData = response.data
                dispatch(fetchNavSuccess(rolesData))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function fetchNavSuccess(rolesData) {
    return {
        type: FETCH_NAV_SUCCESS,
        rolesData: rolesData,
        loading: false
    }
}

export function changeRole(newRole) {
    return async dispatch => {
        dispatch(changeRoleStart())
        const newRoleData = {
            moderator: false,
            editor: false
        }
        
        if (newRole === "moderator") {
            newRoleData.moderator = true
            newRoleData.editor = false
        } else if (newRole === "editor") {
            newRoleData.moderator = false
            newRoleData.editor = true
        }
        
        axios.put(`https://translate-admin-add74.firebaseio.com/rolesData.json`, newRoleData)
             .then(() => {
                 return axios.get("https://translate-admin-add74.firebaseio.com/rolesData.json")
             })
             .then((response) => {
                 const newRolesData = response.data
                 dispatch(changeRoleSuccess(newRolesData))
             })
             .catch((error) => {
                 console.log(error)
             })
    }
} 

export function changeRoleStart() {
    return {
        type: CHANGE_ROLE_START,
        loading: true
    }
}

export function changeRoleSuccess(newRolesData) {
    return {
        type: CHANGE_ROLE_SUCCESS,
        rolesData: newRolesData,
        loading: false
    }
}

export function choiceRole(role) {
    return async dispatch => {
        let rolesData = {
            moderator: false,
            editor: false
        }
        if (role === "moderator") {
            rolesData.moderator = true
            rolesData.editor = false
        } else if (role === "editor") {
            rolesData.moderator = false
            rolesData.editor = true
        }

        axios.put(`https://translate-admin-add74.firebaseio.com/rolesData.json`, rolesData)
             .then((response) => {
                const rolesData = response.data
                dispatch(choiceRoleSuccess(rolesData))
             })
             .catch((error) => {
                console.log(error)
             })
    }
} 

export function choiceRoleSuccess(rolesData) {
    return {
        type: CHOICE_ROLE_SUCCESS,
        rolesData: rolesData
    }
}