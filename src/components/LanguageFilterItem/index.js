import './index.css'

const LangaugeFilterItem = props => {
  const {isActive, languageFiltersDetails, setActiveLangaugeFilterId} = props
  const {id, language} = languageFiltersDetails
  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'langauge-btn'

  const onClickLanguageFilter = () => {
    setActiveLangaugeFilterId(id)
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

export default LangaugeFilterItem
