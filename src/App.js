import React from 'react';

import logo from './logo.svg';

import WorkHistory from './components/work-history';
import Tech from './components/tech';

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Dixon Begay</h1> */}
      
      <div>
        <div className="App-header-inner">
          <div className="App-logo">
            <img src={logo} alt="logo"/>
            <div style={{'display': 'flex', 'flexDirection': 'column'}}>
              <div role="text" type="textSvgPath" logo-role="companyName" style={{'alignSelf': 'flex-start'}}>
                <h1>Dixon Begay</h1>
              </div>
            </div>
          </div>
          <div className="App-links">
            <p className="c-paragraph"><a href="mailto:contact@dixonbegay.com?body=%0D%0D%0D%0D%0DSent%20from%20dixonbegay.com">contact@dixonbegay.com</a></p>
            <span style={{ 'fontSize': '2em' }}>
              <i className="fab fa-github"></i>
            </span>
            &nbsp;<a target="blank" href="https://github.com/shadez95">github.com/shadez95</a>
            <br />
            <span style={{ 'fontSize': '2em' }}>
              <i className="fab fa-twitter"></i>
            </span>
            &nbsp;<a target="blank" href="https://twitter.com/shadez95">twitter.com/shadez95</a>
          </div>
        </div>
      </div>
    </header>
    <div className="App-body">
      <hr />
      <Tech />
      <br />
      <hr />
      <WorkHistory />
      <hr />
      <div className="o-container o-container--small">
        <div>
          <div>Icon by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="blank">CC 3.0 BY</a></div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
