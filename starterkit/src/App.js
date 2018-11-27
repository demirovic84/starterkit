import React, { Component } from 'react';
import './App.scss';
import Section1 from './components/section-1/section-1';
import Section2 from './components/section-2/section-2';
import Section3 from './components/section-3/section-3';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";





class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />
          <Footer />
          <div>
              <ScrollUpButton style={{border:"2px solid aquamarine", outline: "none", width: 25, height: 25, padding: 5}} ContainerClassName="upButton" TransitionClassName="MyOverRideTransitionedClass"/>

          </div>
      </div>
    );
  }
}

export default App;
