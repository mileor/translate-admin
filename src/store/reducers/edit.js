import { EDIT_WORD_SUCCESS, EDIT_WORD_ALERT_CLOSE, FETCH_EDIT_INPUTS_DATA_SUCCESS } from "../actions/actionTypes"

const initialState = {
    inputsEditData: [
        {
            id: "key",
            label: "Ключ",
            placeholder: "Введите ключ",
            isDisabled: true,
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
            isDisabled: false,
        },
    ],
    isShowAlert: false
}

export default function editReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_EDIT_INPUTS_DATA_SUCCESS:
            return {
                ...state, inputsEditData: action.inputsEditData
            }
        case EDIT_WORD_SUCCESS:
            return {
                ...state, isShowAlert: action.isShowAlert
            }
        case EDIT_WORD_ALERT_CLOSE:
            return {
                ...state, isShowAlert: action.isShowAlert
            }
        default:
            return state
    }
}