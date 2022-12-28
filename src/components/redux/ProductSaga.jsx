import { PRODUCT_LIST, SET_PRODUCT_LIST,SEARCH_PRODUCT } from "./Constant";
import {put,takeEvery} from 'redux-saga/effects'

function* getProducts() {
    let data = yield fetch('http://localhost:3500/product');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST, data})
}

function* searchProducts(data) {
    let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
    result = yield result.json();
    console.warn("action is called", result)
    yield put({type: SET_PRODUCT_LIST, data:result})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)

}

export default productSaga

// let result=yield fetch(`http://localhost:3500/product?q=${data.query}`);