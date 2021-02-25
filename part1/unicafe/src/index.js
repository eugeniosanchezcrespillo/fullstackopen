import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({ text, value }) => {
  return (
    <>
      <br />
      {text} {value}
    </>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const total = ({ good, bad, neutral }) => good + bad + neutral;

  const average = ({ good, bad, neutral }) => {
    return (good * 1 - bad) / total({ good, bad, neutral });
  };

  const positive = ({ good, bad, neutral }) => {
    return (good / total({ good, bad, neutral })) * 100 + ' %';
  };

  if (good + neutral + bad === 0)
    return (
      <div>
        <h2>statistics</h2>
        <br />
        No feedback given
      </div>
    );

  return (
    <div>
      <h2>statistics</h2>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="total" value={total({ good, bad, neutral })} />
      <Statistic text="average" value={average({ good, bad, neutral })} />
      <Statistic text="positive" value={positive({ good, bad, neutral })} />
    </div>
  );
};

const Counter = (props) => (
  <button onClick={props.handleClick}>{props.title}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <br />
      <Counter handleClick={() => setGood(good + 1)} title="good" />
      <Counter handleClick={() => setNeutral(neutral + 1)} title="neutral" />
      <Counter handleClick={() => setBad(bad + 1)} title="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
