import { combineReducers } from "redux"
import tableReducer from "./table"
import addReducer from "./add"
import editReducer from "./edit"
import authReducer from "./auth"

export default combineReducers({
    auth: authReducer,
    table: tableReducer,
    add: addReducer,
    edit: editReducer
})