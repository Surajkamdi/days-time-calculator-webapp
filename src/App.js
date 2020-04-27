import React from 'react';
import './ui-components/css/style-updated.scss';
import DaysCalculator from './components/DaysCalculator';
import TimeCalculator from './components/TimeCalculator';

function App() {
  return (
    <div className="body">
      <div className="date--time--row">
        <DaysCalculator />
        <TimeCalculator />
      </div>
      <div className="footer--credit">
        😊 &nbsp;&nbsp;I
        <span role="img" aria-label="heart">🧡</span>
        Open-Source&nbsp;&nbsp; 🤗 &nbsp;&nbsp;
        <span role="img" aria-label="hacker-boy">👩‍💻</span>
        Designed & Developed by Suraj Kamdi
      </div>
    </div>
  );
}

export default App;
