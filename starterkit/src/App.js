import React, { Component } from 'react';
import './App.scss';
import Section1 from './components/section-1/section-1';
import Section2 from './components/section-2/section-2';
import Section3 from './components/section-3/section-3';
import Header from './components/header/header';



class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />

      </div>
    );
  }
}

export default App;
