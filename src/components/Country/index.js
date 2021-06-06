import { Link } from 'react-router-dom';
import './styles.css';

const Country = ({ country, darkmode }) => {
    let body = document.querySelector('body');
    if(darkmode){
        body.style.backgroundColor = "#202d36";
        body.style.color = "#fff";
    }
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";       
    }

    return (
        <main>
            <Link to='/' className={`${darkmode ? "back-dark" : "back"}`}>
                <span className="material-icons">
                    arrow_back
            </span>
            Back
            </Link>
            <div className="card-country">
                <img src={country[0].flag} className="card-img-country" alt={country[0].name} />
                <div className="card-body-country">
                    <h2>{country[0].name}</h2>
                    <div className="card-part">
                        <div className="card-part-1">
                            <p>Native Name : {country[0].nativeName}</p>
                            <p>Population : {country[0].population}</p>
                            <p>Region : {country[0].region}</p>
                            <p>Sub Region : {country[0].subregion}</p>
                            <p>Capital : {country[0].capital}</p>
                        </div>
                        <div className="card-part-2">
                            <p>Top Level Domain : {country[0].topLevelDomain[0]}</p>
                            <p>Currencies : {country[0].currencies[0].name}</p>
                            <p>Languages : {country[0].languages.map(language => (
                                language.name+", "
                            ))}
                            </p>
                        </div>
                    </div>
                    <div className="card-bottom-country">
                        <p>Border Countries :</p>
                        <ul className="card-bottom-list">
                            {country[0].borders.map(border => (

                                <li>{border}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default Country;