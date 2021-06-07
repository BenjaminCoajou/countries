import './styles.css';

const SearchBar = ({inputChange, darkmode}) => {

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
                <button className={`${darkmode ? "dropdown-button-dark" : "dropdown-button"}`}  type="button">
                    Filter by Region
                    <span className="material-icons">
                        expand_more
                    </span>
                </button>
                <ul className="dropdown-menu">
                   
                </ul>
            </div>
        </div>
    );
}

export default SearchBar;