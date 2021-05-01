import { useContext } from 'react'
import CtxSearch from './CtxSearch'

const Item = ({ onSelect: handleClick, ...o }) => (
  <button className="btn-light btn btn-small m-1 text-nowrap" onClick={() => handleClick(o)}>
    {o.title}
  </button>
)

const SearchBoxSugesstion = ({ onSelectItem: handleSelectItem }) => {
  const { searchSugesstions = [] } = useContext(CtxSearch)
  const renderOne = (o) => <Item key={o.woeid} {...o} onSelect={handleSelectItem} />
  const KeepSpaceButton = () => <button className="  btn btn-small m-1 text-nowrap"> </button>
  return (
    <div className="my-3 overflow-auto py-1">
      <div className="d-flex">
        {searchSugesstions.map(renderOne)}
        <KeepSpaceButton />
      </div>
    </div>
  )
}
export default SearchBoxSugesstion
