import { useContext } from 'react'
import CtxSearch from './CtxSearch'

const OneDayForecast = (o) => {
  const { applicable_day, min_temp, max_temp } = o
  return (
    <div className="text-center p-3 flex-fill text-break text-wrap bg-light p-3 py-md-5  px-1  m-1">
      <p className="text-uppercase h6 my-2  text-nowrap small text-muted">{applicable_day}</p>
      <p className="fw-bold h4 text-nowrap">
        {min_temp} - {max_temp}
      </p>
    </div>
  )
}
const SearchResults = () => {
  // Todo: loading state
  const { results } = useContext(CtxSearch)
  const { forecastData = [], timezone, title } = results
  const renderOne = (o, i) => <OneDayForecast {...o} key={i} />
  return (
    <>
      <div>
        <h3 className="m-0">{title}</h3>
        <small className="text-muted small">Timezone: {timezone}</small>
      </div>
      <div className="card my-3">
        <div className="card-body p-1">
          <div className="d-flex flex-column  flex-md-row ">{forecastData.map(renderOne)}</div>
        </div>
      </div>
    </>
  )
}

export default SearchResults
