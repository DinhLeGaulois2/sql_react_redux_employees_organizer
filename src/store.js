import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'

import employees_organizer_reducer from './reducers/employees_organizer/employees_organizer_reducer'

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(combineReducers({
    empl: employees_organizer_reducer,

    form: reduxFormReducer // mounted under "form"
}), middleware);