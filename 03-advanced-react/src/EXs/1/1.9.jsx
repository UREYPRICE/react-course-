import { useState, useEffect } from "react";

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
      <h5>Statistics</h5>
      <p>Good {good}</p>
      <p>Neutral {neutral} </p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {avg}</p>
      <p>Positive {positive + "%"}</p>
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

      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handlebad}>Bad</button>

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
