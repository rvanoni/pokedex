const getIdFromURL = (url) => /\/[\d]+\//.exec(url)[0].replace(/\//g, '')

export default getIdFromURL
