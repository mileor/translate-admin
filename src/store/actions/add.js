import axios from "axios"
import { ADD_NEW_WORD_SUCCESS, ADD_NEW_WORD_ALERT_CLOSE } from "./actionTypes"

export function addNewWord() {
    return async dispatch => {
        const translateKeyInput = document.querySelector("#key")
        const translateRuInput = document.querySelector("#translateRu")
        
        function timeAdjustment(time) {
            if (time < 10) {
                time="0" + time;
            }
            return time;
        }
        const translateDate = timeAdjustment(new Date().getHours()) + ":" +
                                timeAdjustment(new Date().getMinutes()) + ":" +
                                timeAdjustment(new Date().getSeconds())  + " " + 
                                new Date().getDate() + "/" + 
                                new Date().getMonth() + 1 + "/" + 
                                new Date().getFullYear()

        const newWord = {
            key: translateKeyInput.value,
            ru: translateRuInput.value,
            eng: "",
            date: translateDate,
            isDone: false
        }

        axios.post("https://translate-admin-add74.firebaseio.com/translateTableData.json", newWord)
             .catch((error) => {
                console.log(error)
             })

        translateKeyInput.value = ""
        translateRuInput.value = ""
        dispatch(addNewWordSuccess())
        setTimeout(() => dispatch(addNewWordAlertClose()), 2500)
    }
}

export function addNewWordSuccess() {
    return {
        type: ADD_NEW_WORD_SUCCESS,
        isShowAlert: true
    }
}

export function addNewWordAlertClose() {
    return {
        type: ADD_NEW_WORD_ALERT_CLOSE,
        isShowAlert: false
    }
}