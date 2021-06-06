import './styles.css';

const Country = () => {

    return (
        <main>
            <a className="back" href="#">
                <span className="material-icons">
                    arrow_back
            </span>
            Back
            </a>
            <div className="card-country">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-225px-Flag_of_France.svg.png" className="card-img-country" alt="..." />
                <div className="card-body-country">
                    <h2>Country</h2>
                    <div className="card-part">
                        <div className="card-part-1">
                            <p>Native :</p>
                            <p>Population :</p>
                            <p>Region :</p>
                            <p>Sub Region :</p>
                            <p>Capital :</p>
                        </div>
                        <div className="card-part-2">
                            <p>Top Level Domain :</p>
                            <p>Currencies :</p>
                            <p>Languages :</p>
                        </div>
                    </div>
                    <div className="card-bottom-country">
                        <p>Border Countries :</p>
                        <ul className="card-bottom-list">                            
                            <li>country 1</li>
                            <li>country 1</li>
                        </ul>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default Country;