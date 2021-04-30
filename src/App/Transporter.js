export const fetchForcast = async (woeid) => {
  let rs = {}
  try {
    const url = `https://www.metaweather.com/api/location/${woeid}/ `
    rs = await (await fetch(url)).json()
  } catch (error) {
    // show msg error?
  }
  return rs
}
export const fetchApi = async (keyword) => {
  let rs = {}
  try {
    const url = `https://www.metaweather.com/api/location/search/?query=${keyword}`
    rs = await (await fetch(url)).json()
  } catch (error) {
    // show msg error?
  }
  return rs
}
const Transporter = {
  fetchApi,
  fetchForcast,
}

export default Transporter
