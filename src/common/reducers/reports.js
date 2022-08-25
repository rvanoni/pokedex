import * as ActionTypes from '../actions'

const initialState = {
  reports: null,
  loading: false,
  error: null,
}

export function reportsReducer(action, state = initialState) {
  switch (action.type) {
    case ActionTypes.REPORTS_RESULTS_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case ActionTypes.REPORTS_RESULTS_SUCCESS:
      return {
        ...state,
        loading: false,
        reports: action.data,
      }
    case ActionTypes.REPORTS_RESULTS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    default:
      return state
  }
}

export function getReports(state) {
  return state.reportsReducer.reports
}

export function getLoading(state) {
  return state.reportsReducer.loading
}

export function getError(state) {
  return state.reportsReducer.error
}
