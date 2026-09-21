import { put, takeEvery } from "redux-saga/effects"
import { CREATE_SEO_DATA, CREATE_SEO_DATA_RED, DELETE_SEO_DATA, DELETE_SEO_DATA_RED, GET_SEO_DATA, GET_SEO_DATA_RED, UPDATE_SEO_DATA, UPDATE_SEO_DATA_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./Services/index"

function* createSaga(action) {                                                  //worker
    let response = yield createRecord("seodata", action.payload)
    // let response = yield createMultipartRecord("seodata",action.payload)
    yield put({ type: CREATE_SEO_DATA_RED, payload: response })
}

function* getSaga() {                                                     //worker
    let response = yield getRecord("seodata")
    yield put({ type: GET_SEO_DATA_RED, payload: response })
}

function* updateSaga(action) {                                                  //worker
    yield updateRecord("seodata", action.payload)
    yield put({ type: UPDATE_SEO_DATA_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("seodata",action.payload)
    // yield put({ type: UPDATE_SEO_DATA_RED, payload: response })
}

function* deleteSaga(action) {                                                  //worker
    yield deleteRecord("seodata", action.payload)
    yield put({ type: DELETE_SEO_DATA_RED, payload: action.payload })
}


export default function* SeoDataSagas() {
    yield takeEvery(CREATE_SEO_DATA, createSaga)                            //Watcher
    yield takeEvery(GET_SEO_DATA, getSaga)                                  //Watcher
    yield takeEvery(UPDATE_SEO_DATA, updateSaga)                            //Watcher
    yield takeEvery(DELETE_SEO_DATA, deleteSaga)                            //Watcher
}