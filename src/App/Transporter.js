export const fetchForcast = async (woeid) => {
  let rs = {}
  try {
    const url = `/api/location/${woeid}/ `
    rs = await (await fetch(url)).json()
  } catch (error) {
    // show msg error?
  }
  return rs
}
export const fetchLocations = async (keyword) => {
  let rs = []
  try {
    const url = `/api/location/search/?query=${keyword}`
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
