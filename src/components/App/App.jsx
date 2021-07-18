import React from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import './App.css';
import HowFeeling from '../HowFeeling/HowFeeling';
import HowUnderstanding from '../HowUnderstanding/HowUnderstanding';
import HowSupported from '../HowSupported/HowSupported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

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
          <Comments />
        </Route>
        <Route path='/review'>
          <Review />
        </Route>
        <Route path='/thankYou'>
          <ThankYou />
        </Route>
      </Router>
    </div>
  );
}

export default App;
