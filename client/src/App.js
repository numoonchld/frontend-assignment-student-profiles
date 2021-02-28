import React, { Fragment } from 'react'
import './App.css';
import StudentDirectory from './components/StudentDirectory'


const App = () => {

  return <Fragment>
    <div className='container'>
    <StudentDirectory/>
    </div>
  </Fragment>
}

export default App;
