import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Search from './Components/Search';
import Navbar from './Components/Navbar';
import Results from './Components/Results';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Search} />
          <Route exact path="/results" component={Results} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
