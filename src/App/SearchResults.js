import { useContext } from 'react'
import CtxSearch from './CtxSearch'

const OneDayForecast = (o) => {
  const { applicable_day, min_temp, max_temp } = o
  return (
    <div className="text-center p-3 flex-fill text-break text-wrap bg-light p-3 m-1">
      <p className="text-uppercase  text-muted">{applicable_day}</p>
      <p className="fw-bold fz-17 display-6 text-nowrap">
        {min_temp} - {max_temp}
      </p>
    </div>
  )
}
const SearchResults = () => {
  const { results } = useContext(CtxSearch)
  const { forecastData = [], timezone, title } = results
  return (
    <>
      <div>
        <h3 className="m-0">{title}</h3>
        <small className="text-muted small">Timezone: {timezone}</small>
      </div>
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex  ">
            {forecastData.map((o) => (
              <OneDayForecast {...o} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResults
