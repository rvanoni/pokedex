import * as R from 'ramda'

const capitalize = (val) =>
  R.head(val).toUpperCase() + val.substring(1, val.length)

export default capitalize
