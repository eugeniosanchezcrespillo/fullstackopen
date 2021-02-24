import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Counter = (props) => (
    <button onClick={props.handleClick}>{props.title}</button>
  );
  return (
    <div>
      <h2>give feedback</h2>
      <br />
      <Counter handleClick={() => setGood(good + 1)} title="good" />
      <Counter handleClick={() => setNeutral(neutral + 1)} title="neutral" />
      <Counter handleClick={() => setBad(bad + 1)} title="bad" />
      <h2>statistics</h2>
      <br />
      good {good}
      <br />
      neutral {neutral}
      <br />
      bad {bad}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
