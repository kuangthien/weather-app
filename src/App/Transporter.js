const functionsUrl = process.env.REACT_APP_API_URL

export const fetchForcast = async (woeid) => {
  let rs = {}
  try {
    const url = `${functionsUrl}/locationForecast?query=${woeid}`
    rs = await (await fetch(url)).json()
  } catch (error) {
    // show msg error?
  }
  return rs
}
export const fetchLocations = async (keyword) => {
  let rs = []
  try {
    const url = `${functionsUrl}/locationSearch?query=${keyword}`
    rs = await (await fetch(url)).json()
  } catch (error) {
    // show msg error?
  }
  return rs
}
const Transporter = {
  fetchForcast,
  fetchLocations,
}

export default Transporter
