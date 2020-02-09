import axios from "axios"
import { FETCH_TABLE_SUCCESS, DELETE_TABLE_ITEM } from "./actionTypes"

export function fetchTable() {
    return async dispatch => {
        axios.get("https://translate-admin-add74.firebaseio.com/translateTableData.json")
             .then((response) => {
                 const arr = Object.values(response.data)
                 const arrKeys = Object.keys(response.data)
                 dispatch(fetchTableSuccess(arr, arrKeys))
             })
             .catch((error) => {
                 console.log(error)
             })
    }
}

export function fetchTableSuccess(arr, arrKeys) {
    return {
        type: FETCH_TABLE_SUCCESS,
        translateTableData: arr,
        translateTableDataKeys: arrKeys,
    }
}

export function deleteFromTable(clickTarget, arr, arrKeys) {
    return dispatch => {
        const targetData = clickTarget.getAttribute("data-target-key")

        let deleteItemIndex
        arr.forEach((item, index) => {
            if (item.key === targetData) {
                deleteItemIndex = index
            }
            return deleteItemIndex
        })

        let deleteItemKey = arrKeys[deleteItemIndex]

        axios.delete(`https://translate-admin-add74.firebaseio.com/translateTableData/${deleteItemKey}.json`)
             .then(() => {
                 return axios.get("https://translate-admin-add74.firebaseio.com/translateTableData.json")
             })
             .then((response) => {
                 let arr = []
                 let arrKeys = []
                 if (response.data !== null) {
                     arr = Object.values(response.data)
                     arrKeys = Object.keys(response.data)
                 }
                 dispatch(deleteTableItem(arr, arrKeys))
             })
             .catch((error) => {
                 console.log(error)
             })
    }
}

export function deleteTableItem(arr, arrKeys) {
    return {
        type: DELETE_TABLE_ITEM,
        translateTableData: arr,
        translateTableDataKeys: arrKeys,
    }
}