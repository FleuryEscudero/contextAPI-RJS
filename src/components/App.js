import React, { Component } from 'react'
import Teams from './Teams';
import LaLigaProvider from './LaLiga';



class App extends Component {


  render() {


    return (
      <div className="container">
        <LaLigaProvider>
          <Teams />
        </LaLigaProvider>
      </div>
    );
  }
}

export default App;
