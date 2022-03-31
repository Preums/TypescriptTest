import { FC } from 'react';

import Header from './components/Header';
import Todos from './components/todos/Todos';
import Counter from './components/counter/Counter';

import logo from './logo.svg';

import './App.css';

const App:FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Header name='typescript world'/>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Counter />
      <Todos />
    </header>
  </div>
);

export default App;
