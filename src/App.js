import React from 'react';
import './ui-components/css/style.css';
import DaysCalculator from './components/DaysCalculator';
import TimeCalculator from './components/TimeCalculator';

function App() {
  return (
    <div className="date--time--row">
      <DaysCalculator/>
      <TimeCalculator/>
    </div>
  );
}

export default App;
