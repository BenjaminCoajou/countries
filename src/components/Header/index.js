import './styles.css';

const Header = () => {

    return (
        <header>
            <h1>Where in the world ?</h1>
            <button type="button" className="dark-mode">
                <span className="material-icons">
                    dark_mode
                </span>
                Darck Mode
            </button>
        </header>
    );
}

export default Header;