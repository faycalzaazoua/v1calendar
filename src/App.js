import React, { Component } from 'react';
import './App.css';

import Calendar from './Components/Calendar/';


const style = {
  position: "relative",
  margin: "50px auto"
}

class App extends Component {
  onDayClick = (e, day) => {
    return alert('redirct vers formulaire de rdv modal a faire ');
  }
  
  render() {
    return (
      <div className="App">
        <Calendar style={style} width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>     
      </div>
    );
  }
}


export default App;
