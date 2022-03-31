import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from "../sagas/rootSaga";
import rootReducer from "./reducers/rootReducer";


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;