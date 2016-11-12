import { createStore as reduxCreateStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  temp: (state = {}) => state,
})

export default function createStore(initialState) {
  const jackedCreateStore = compose(
    applyMiddleware(
      thunk,
    ),
  )(reduxCreateStore)

  const store = jackedCreateStore(rootReducer, initialState)

  return store
}
