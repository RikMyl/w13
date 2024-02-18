import React from 'react';
import './App.css';

const App = () => {
  // Array of weekdays in English starting from Monday
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Weekday</th>
          </tr>
        </thead>
        <tbody>
          {weekdays.map((weekday, index) => (
            <tr key={index}>
              <td>{weekday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;