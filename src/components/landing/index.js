import React from 'react';

import View from './view.js';

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      position: 0,
      isTop: false,
      active: '',
    };
  }
  render(){
    return(
      <View />
    );
  }
}

export default Landing;
