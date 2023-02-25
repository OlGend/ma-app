import React, { Component, useState } from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Tasks from './Tasks/Tasks'
import './App.scss';

const App = () =>  {

 

//   onChangeHandler = event => {
//     this.setState({ value: event.target.value });
//     console.log(this.onChangeHandler);
//   }

// const value = useState(bool);




  return (
      <div className="App">
        <Header />
        <Tasks>
        </Tasks>
        <Footer />
      </div>
  );
}

export default App;
