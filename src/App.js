import React, { Component } from 'react';
import Landing from './components/landing';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Landing} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
