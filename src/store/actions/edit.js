import axios from "axios"
import { EDIT_WORD_SUCCESS, EDIT_WORD_ALERT_CLOSE, FETCH_EDIT_INPUTS_DATA_SUCCESS } from "./actionTypes"

export function editWord(newData, editItemKey) {
    return async dispatch => {
        axios.put(`https://translate-admin-add74.firebaseio.com/translateTableData/${editItemKey}.json`, newData)
             .catch((error) => {
                 console.log(error)
             })
        dispatch(editWordSuccess())
        setTimeout(() => dispatch(editWordAlertClose()), 2500)
    }
}

export function editWordSuccess() {
    return {
        type: EDIT_WORD_SUCCESS,
        isShowAlert: true
    }
}

export function editWordAlertClose() {
    return {
        type: EDIT_WORD_ALERT_CLOSE,
        isShowAlert: false
    }
}

export function fetchEditInputsData() {
    return async (dispatch, getState) => {
        axios
            .get("https://translate-admin-add74.firebaseio.com/rolesData.json")
            .then((response) => {
                let newInputsEditData = [
                    ...getState().edit.inputsEditData
                ]
                if (response.data.editor === true) {
                    newInputsEditData[0].isDisabled = true
                    newInputsEditData[1].isDisabled = false
                    newInputsEditData[2].isDisabled = false
                } else if (response.data.moderator === true) {
                    newInputsEditData[0].isDisabled = false
                    newInputsEditData[1].isDisabled = false
                    newInputsEditData[2].isDisabled = true
                }
                dispatch(fetchEditInputsDataSuccess(newInputsEditData))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function fetchEditInputsDataSuccess(newInputsEditData) {
    return {
        type: FETCH_EDIT_INPUTS_DATA_SUCCESS,
        inputsEditData: newInputsEditData
    }
}