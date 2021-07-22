import {combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import tableReducer from '../Table/tableReducer';


const rootReducer = combineReducers({
    table: tableReducer,
  form: formReducer
})

export default rootReducer;