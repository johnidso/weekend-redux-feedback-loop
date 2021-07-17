import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Route} from "react-router-dom";
import './App.css';
import HowFeeling from '../HowFeeling/HowFeeling';
import HowUnderstanding from '../HowUnderstanding/HowUnderstanding';
import HowSupported from '../HowSupported/HowSupported';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path='/' exact>
          <HowFeeling />
        </Route>
        <Route path='/understanding'>
          <HowUnderstanding />
        </Route>
        <Route path='/supported'>
          <HowSupported />
        </Route>
        <Route path='/comments'>
          {/* Comments */}
        </Route>
        <Route path='/review'>
          {/* Review */}
        </Route>
        <Route path='/thankYou'>
          {/* ThankYou */}
        </Route>
      </Router>
    </div>
  );
}

export default App;
