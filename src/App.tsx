import React from 'react';
import './App.css';
import  MainBlocks  from './components/MainBlocks/MainBlocks';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>Задачи</h1>
        <hr />
      </header>
      <MainBlocks/>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;