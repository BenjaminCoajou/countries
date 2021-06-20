import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Country from '../../containers/Country';

const App = ({ fetchCountries }) => {

  useEffect(() => {
    fetchCountries()
  }, [fetchCountries]);

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/countries/" component={Home} />
        <Route exact path="/countries/:country" component={Country} />
      </Switch>
      
    </div>
  );
}

export default App;
