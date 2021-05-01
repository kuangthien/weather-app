import { createRef, useContext } from 'react'
import CtxSearch, { CtxSearchAdaptor } from './CtxSearch'
import SearchBoxSugesstion from './SearchBoxSugesstion'
import Transporter from './Transporter'

const SearchBox = () => {
  // move refObj to context is better for more complex form.
  // And pls dont use controlled components for input form, too complicted
  const refSearchInput = createRef()
  const refQueryParams = createRef()
  const { setResults, setSearchSugesstions, searchSugesstions = [] } = useContext(CtxSearch)

  const handleSubmit = async () => {
    let q = ''

    if (searchSugesstions.length === 1) {
      // case 1 sugestion only and user press enter => submit immediately
      const assumptedSelect = searchSugesstions[0]
      refSearchInput.current.value = assumptedSelect.title
      q = assumptedSelect.woeid
    } else {
      q = refQueryParams.current.value
    }
    const fetchRs = await Transporter.fetchForcast(q)
    const rs = CtxSearchAdaptor.updateFromServer(fetchRs)
    setResults(rs)
  }
  const handleChangeInput = async () => {
    // TODO: debounce pls
    const fetchRs = await Transporter.fetchLocations(refSearchInput.current.value)
    const rs = CtxSearchAdaptor.updateLocationsFromServer(fetchRs)
    setSearchSugesstions(rs)
  }
  const handleSelect = ({ title, woeid }) => {
    refSearchInput.current.value = title
    refQueryParams.current.value = woeid
    handleSubmit()
  }

  return (
    <div className="my-3">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}>
        {/* pls dont move out form to avoid loose focusing : */}
        <input
          data-testid ="search-input"
          onChange={handleChangeInput}
          ref={refSearchInput}
          className="form-control"
          type="text"
          placeholder="Search"
        />
      </form>
      <input ref={refQueryParams} type="text" hidden />
      <SearchBoxSugesstion onSelectItem={handleSelect} />
    </div>
  )
}
export default SearchBox
