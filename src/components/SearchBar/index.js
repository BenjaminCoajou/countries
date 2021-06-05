import './styles.css';

const SearchBar = () => {

    return (
        <div className="search-bar">
            <div className="filter">
                <span class="material-icons filter-icon">
                    search
                </span>
            <form className="filter-form">
                <input className="filter-input" type="search" placeholder="Search for country..." />
            </form>
            </div>
            <div className="dropdown">
                <button className="dropdown-button"  type="button">
                    Filter by Region
                    <span class="material-icons">
                        expand_more
                    </span>
                </button>
                <ul className="dropdown-menu">
                    <li><a href="#">Africa</a></li>
                    <li><a href="#">America</a></li>
                    <li><a href="#">Asia</a></li>
                    <li><a href="#">Europe</a></li>
                    <li><a href="#">Oceania</a></li>
                </ul>
            </div>
        </div>
    );
}

export default SearchBar;