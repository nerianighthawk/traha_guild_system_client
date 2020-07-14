import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

import { reducer } from './state'

const anyWindow = window as any
const thunkWithAxios = thunk.withExtraArgument(axios)

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunkWithAxios),
        process.env.NODE_ENV === 'development' && anyWindow.devToolsExtension ? anyWindow.devToolsExtension() : (f: any) => f
    )
)

export default store
