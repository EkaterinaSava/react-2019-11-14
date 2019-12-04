import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {addUser} from './middlewares/addUser'
import {composeWithDevTools} from 'redux-devtools-extension'
const enhancer = composeWithDevTools(applyMiddleware(addUser))

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
