import { createContext } from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const CtxSearch = createContext({})
export const CtxSearchAdaptor = {
  updateLocationsFromServer: (json = []) => {
    const rs = json.map((o) => {
      const { location_type, title, woeid } = o
      if (location_type === 'City') {
        return { title, woeid }
      }
      return false
    })
    return rs.filter((o) => !!o)
  },
  updateFromServer: (json) => {
    // Step: mapping to context
    // API ref: https://www.metaweather.com/api/#location
    // TODO: transform UTC  timzone from server if they have a code of UTC/GMT for a more correct display
    const { consolidated_weather = [], timezone, title } = json
    const forecastData = consolidated_weather.map(({ max_temp, min_temp, applicable_date }) => ({
      max_temp: Number.parseInt(max_temp),
      min_temp: Number.parseInt(min_temp),
      applicable_date,
      applicable_day: dayjs(applicable_date).format('dddd'),
    }))
    return {
      forecastData,
      timezone,
      title,
    }
  },
}
export default CtxSearch
