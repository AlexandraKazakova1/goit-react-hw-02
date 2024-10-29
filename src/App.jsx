import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [clicks, setClicks] = useState(0);
  const updateFeedback = (feedbackType) => {
    setClicks(clicks + 1);
  };
  return (
    <>
      <Description />
      <Options />
      <Feedback />
    </>
  );
}

export default App;
