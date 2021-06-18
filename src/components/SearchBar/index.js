import './styles.css';

const SearchBar = ({inputChange, darkmode, filterSelect}) => {

    return (
        <div className="search-bar">
            <div className={`${darkmode ? "filter-dark" : "filter"}`}>
                <span className="material-icons filter-icon">
                    search
                </span>
            <form className="filter-form">
                <input className="filter-input" type="search" placeholder="Search for country..." onChange={(evt) => {inputChange(evt.target.value)}} />
            </form>
            </div>
            <div className="dropdown">
                <select name="regions" className={`${darkmode ? "dropdown-select-dark" : "dropdown-select"}`} onChange={(evt) => {filterSelect(evt.target.value)}}>
                    <option value="all"> Filter by Region</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Europe">Europe</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                </select>
                {/* <button className={`${darkmode ? "dropdown-button-dark" : "dropdown-button"}`}  type="button">
                    Filter by Region
                    <span className="material-icons">
                        expand_more
                    </span>
                </button>
                <ul className="dropdown-menu">
                   
                </ul> */}
            </div>
        </div>
    );
}

export default SearchBar;