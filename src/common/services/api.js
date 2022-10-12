import axios from 'axios'

const get = ({ entity, params = {} }) =>
  new Promise((resolve, reject) => {
    axios
      .get(process.env.REACT_APP_API_ENDPOINT + entity, params)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })

export default get
