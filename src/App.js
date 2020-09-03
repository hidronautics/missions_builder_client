import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';
import Workfield from './components/Command';

const App = (props) => {

  return (
    <div className="App">
        <Navbar />
        <Leftbar />
    </div>
  );
}

export default App;
