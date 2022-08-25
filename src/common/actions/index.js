export const REPORTS_RESULTS_REQUEST = 'REPORTS_RESULTS_REQUEST'
export const REPORTS_RESULTS_SUCCESS = 'REPORTS_RESULTS_SUCCESS'
export const REPORTS_RESULTS_FAILURE = 'REPORTS_RESULTS_FAILURE'

export function reportResultsRequest(data) {
  return { type: REPORTS_RESULTS_REQUEST, data }
}

export function reportResultsSuccess(data) {
  return {
    type: REPORTS_RESULTS_SUCCESS,
    data,
  }
}

export function reportResultsError(error) {
  return {
    type: REPORTS_RESULTS_FAILURE,
    error,
  }
}
