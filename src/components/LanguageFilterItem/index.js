import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageFiltersDetails, setActiveLanguageFilterId} = props
  const {id, language} = languageFiltersDetails
  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'langauge-btn'

  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        onClick={onClickLanguageFilter}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
