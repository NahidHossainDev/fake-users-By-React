import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Users from './Component/Users/Users';
import Calculate from './Component/Calculate/Calculate';
import { useState } from 'react';

function App() {
  const [handleValue, setHandleValue] = useState([]);

  const handeler = (name, salary) => {
    setHandleValue([...handleValue,{name, salary}]);
  }

  return (
    <div className="App">
      <Header className="header"></Header>
      <body className='main-body'>
        <Users handel={handeler} ></Users>
        <Calculate hValue={handleValue}></Calculate>
      </body>
    </div>
  );
}

export default App;
