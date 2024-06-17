import './index.css'

const LangaugeFilterItem = props => {
  const {isActive, languageFilterDetails, setActiveLangaugeFilterId} = props
  const {id, language} = languageFilterDetails
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
