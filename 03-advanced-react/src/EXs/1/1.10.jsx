import { useState, useEffect } from "react";

const Button = (props) => {
  return <button onClick={props.funt}> {props.text} </button>;
};

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, all, avg, positive }) => {
  if (all == 0) {
    return (
      <div>
        <h5>Statistics</h5>
        <p>No Feedback Given</p>
      </div>
    );
  }
  return (
    <div>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={all} />
      <StatisticLine text="Average" value={avg} />
      <StatisticLine text="Positive" value={positive + "%"} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [avg, setAvg] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGood = () => {
    setGood((prevGood) => prevGood + 1);

    setAll((prevAll) => prevAll + 1);
  };
  const handleNeutral = () => {
    setNeutral((prevNeutal) => prevNeutal + 1);
    setAll((prevAll) => prevAll + 1);
  };
  const handlebad = () => {
    setBad((prevBad) => prevBad + 1);
    setAll((prevAll) => prevAll + 1);
  };

  useEffect(() => {
    if (all > 0) {
      const average = (good * 1 + neutral * 0 + bad * -1) / all;
      const positive = (good / all) * 100;
      setAvg(average);
      setPositive(positive);
    }
  }, [good, neutral, bad, all]);

  return (
    <div>
      <h2> Final Review </h2>
      <Button funt={handleGood} text="Good" />
      <Button funt={handleNeutral} text="Neutral" />
      <Button funt={handlebad} text="Bad" />
      {/* <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handlebad}>Bad</button> */}

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        all={all}
        avg={avg}
        positive={positive}
      />
    </div>
  );
};

export default App;
