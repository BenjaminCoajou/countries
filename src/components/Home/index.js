import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';
import SearchBar from '../SearchBar';

const Home = ({ countries, isLoad, handleCountryClick }) => {
    console.log('component home', isLoad)
    return (
        <main>
            <SearchBar />
            <div className="class-group">

                {countries.map(country => (

                    <Link key={country.alpha3Code} to={`/${country.alpha3Code}`} className="card" onClick={() => {handleCountryClick(country.alpha3Code)}}>
                        <div className="card-img">
                            <img src={country.flag}  alt="flag" />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{country.name}</h2>
                            <p className="card-text">Population : {country.population}</p>
                            <p className="card-text">Region : {country.region}</p>
                            <p className="card-text">Capital : {country.capital}</p>
                        </div>
                    </Link>

                ))}

            </div>
        </main>
    );
}

Home.propTypes = {
    countries: PropTypes.array.isRequired,
    isLoad: PropTypes.bool.isRequired,
}

export default Home;