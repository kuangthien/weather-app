import { useState } from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import SearchBox from './SearchBox'
import SearchResults from './SearchResults'
import CtxSearch from './CtxSearch'

dayjs.extend(utc)

function App() {
  const [results, setResults] = useState({})
  const [searchSugesstions, setSearchSugesstions] = useState([])
  return (
    <div className="App p-3">
      <div className="container">
        <h1 className="h4">Weather App</h1>
        <CtxSearch.Provider value={{ results, setResults, searchSugesstions, setSearchSugesstions }}>
          <SearchBox />
          <SearchResults />
        </CtxSearch.Provider>
      </div>
    </div>
  )
}

export default App
