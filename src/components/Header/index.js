import React from 'react';
import './styles.css';

const Header = ({handleDarkmodeClick, darkmode}) => {
    let body = document.querySelector('body');
    if(darkmode){
        body.style.backgroundColor = "#202d36";
        body.style.color = "#000";
    }
    else {
        body.style.backgroundColor = "lightgray";
        body.style.color = "black";       
    }

    return (
        <header className={darkmode ? "dark" : ""}>
            <h1>Where in the world ?</h1>
            <button type="button" className={`dark-mode ${darkmode ? "dark" : ""}`} onClick={() => {handleDarkmodeClick()}}>
                <span className="material-icons">
                    dark_mode
                </span>
                Darck Mode
            </button>
        </header>
    );
}

export default Header;