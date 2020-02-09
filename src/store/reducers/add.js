import { ADD_NEW_WORD_SUCCESS, ADD_NEW_WORD_ALERT_CLOSE } from "../actions/actionTypes"

const initialState = {
    inputsData: [
        {
            id: "key",
            label: "Ключ",
            placeholder: "Введите ключ",
            isDisabled: false,
            
        },
        {
            id: "translateRu",
            label: "Русский перевод",
            placeholder: "Введите слово на русском",
            isDisabled: false,
            
        },
        {
            id: "translateEng",
            label: "Английский перевод",
            placeholder: "Введите слово на английском",
            isDisabled: true
        },
    ],
    isShowAlert: false
}

export default function addReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_NEW_WORD_SUCCESS:
            return {
                ...state, isShowAlert: action.isShowAlert
            }
        case ADD_NEW_WORD_ALERT_CLOSE:
            return {
                ...state, isShowAlert: action.isShowAlert
            }
        default:
            return state
    }
}