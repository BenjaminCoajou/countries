import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header';
import Home from '../../containers/Home';

const App = ({ fetchCountries }) => {

  useEffect(() => {
    fetchCountries()
  }, [fetchCountries]);

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      
    </div>
  );
}

export default App;
