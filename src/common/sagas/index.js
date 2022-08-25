import { takeLatest, fork, all, put } from 'redux-saga/effects'
// import * as api from 'common/services/api'
import * as actions from 'common/actions'

export function* reportResults() {
  try {
    // const response = yield call(api.callAWS, {
    //  entity: `report/${action.data.id}`,
    //  params: action.data.params,
    //  method: 'GET',
    // })
    yield put(console.log('test'))
    // yield put(actions.reportResultsSuccess({ ...response, id: action.data.id }))
  } catch (error) {
    console.error(error)
    // yield put(actions.reportResultsError(error))
  }
}
export function* watchReportResults() {
  yield takeLatest(actions.REPORTS_RESULTS_REQUEST, reportResults)
}

export default function* rootSaga() {
  yield all([fork(watchReportResults)])
}
