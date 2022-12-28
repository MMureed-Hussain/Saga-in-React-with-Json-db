import { configureStore } from "@reduxjs/toolkit";
import ProductSaga from "./ProductSaga";
import RootReducer from "./RootReducer";
import createSagaMiddleware from 'redux-saga';

// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:RootReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(ProductSaga);

export default store;
