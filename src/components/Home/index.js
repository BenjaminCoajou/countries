import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import SearchBar from '../SearchBar';

const Home = ({ countries, isLoad }) => {
    console.log('component home', isLoad)
    return (
        <main>
            <SearchBar />
            <div className="class-group">

                {countries.map(country => (

                    <div className="card">
                        <div className="card-img">
                            <img src={country.flag}  alt="flag" />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{country.name}</h2>
                            <p className="card-text">Population : {country.population}</p>
                            <p className="card-text">Region : {country.region}</p>
                            <p className="card-text">Capital : {country.capital}</p>
                        </div>
                    </div>

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