import React, { Component } from 'react';
import Blog from './components/blog';
import Landing from './components/landing';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Landing} />
          <Route exact path='/blog' component={Blog} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
