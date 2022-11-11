import React from 'react';

import './App.css';
import { JobBoard } from './components/JobBoard';
import { JobDetails } from './components/JobDetails';

function App() {
  return (
    <div className="App">
      {/* <JobBoard/> */}
      <JobDetails/>
    </div>
  );
}

export default App;
