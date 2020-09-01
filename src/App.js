import React from 'react';
import Routes from './routes'
import './App.css';
import 'antd/dist/antd.css';
import Header from './components/header';


const App = () => {
  return(
    <div className='App'>
      <Header />
      <Routes />
    </div>
  )
}

export default App;
