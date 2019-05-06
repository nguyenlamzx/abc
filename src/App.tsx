import React from 'react';
import logo from './logo.svg';
// import { ReactComponent as Logo } from './logo.svg';
import './App.scss';

// import { loader } from 'graphql.macro';

// const query = loader('./foo.graphql');

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Logo is an actual React component */}
        {/* <Logo /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
