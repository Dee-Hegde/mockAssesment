import { applyMiddleware, combineReducers, createStore } from "redux"
import { compose } from "redux"
import thunk from "redux-thunk"
import {countryReducer} from "./countryData/ActionReducer"


const rootreducer = combineReducers({
  countryRed:countryReducer

})

const store = createStore(rootreducer, 
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    ))

export default store;