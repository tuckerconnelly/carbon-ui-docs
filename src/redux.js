import { createStore as reduxCreateStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import app from './app'

const rootReducer = combineReducers({ app })

export default function createStore(initialState) {
  const jackedCreateStore = compose(
    applyMiddleware(
      thunk,
    ),
  )(reduxCreateStore)

  const store = jackedCreateStore(rootReducer, initialState)

  return store
}
