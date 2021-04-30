import { createRef, useContext } from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import CtxSearch, { CtxSearchAdaptor } from './CtxSearch'
import Transporter from './Transporter'

dayjs.extend(utc)

const SearchBox = () => {
  const refSearchInput = createRef()
  const { setResults } = useContext(CtxSearch)

  const handleSubmit = async () => {
    const keyword = refSearchInput.current.value
    const fetchRs = await Transporter.fetchForcast(keyword)
    const rs = CtxSearchAdaptor.updateFromServer(fetchRs)
    setResults(rs)
  }
  return (
    <div className="my-3">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}>
        <input ref={refSearchInput} className="form-control" type="text" placeholder="Search" />
      </form>
    </div>
  )
}
export default SearchBox
