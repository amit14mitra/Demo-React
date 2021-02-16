import React from 'react';
import logo from './logo.svg';
import './App.css';
//import {Hello} from './components/Hello';
// import Welcome from './components/welcome';
//import StateDemo from './components/StateDemo';
//import LifeCycleAim from './components/LifeCycleAim';
import FunctionEvent from './components/FunctionEvent';
// import NameList from './components/NameList';
// import RefDemo from './components/RefDemo';
import ComponentA from './components/ComponentA';
import {dataContext, UnameProvider} from './components/UsernameContext';
import HookDemo from './components/HookDemo';
import DataFetch from './components/DataFetch';
import UseContextDemo from './components/UseContextDemo';
import UseReducerDemo from './components/UseReducerDemo';

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the world of ReactJs
        </p>
        {/* <Hello name='Anuj'>
          <button className='btn'>Do Something</button>
        </Hello> */}
        {/* <Hello></Hello> */}
        {/* <Welcome></Welcome> */}
        {/* <LifeCycleAim var='working'></LifeCycleAim> */}
        {/* <StateDemo name='Demo di66i'></StateDemo> */}
        <FunctionEvent/>
        {/* <NameList></NameList> */}
        {/* <RefDemo></RefDemo> */}
        <UnameProvider value='providing data'>
            <ComponentA/>
            <dataContext.Provider value='Data is been sended'>
              <UseContextDemo/>
            </dataContext.Provider>
        </UnameProvider>
        <HookDemo/>
        <DataFetch/>
        <UseReducerDemo/>
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
}

export default App;
