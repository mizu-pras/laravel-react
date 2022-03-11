import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers/index'
import thunk from 'redux-thunk'

export default createStore(reducers, compose(applyMiddleware(thunk)))
