import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import RootReducer from './Reducers/RootReducer'
import { RootSaga } from './Sagas/RootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga)

export default store
