//react, components, estaticos
import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Questions";
import GameOver from "./components/GameOver";

import './App.css'


function App() {
  // eslint-disable-next-line no-unused-vars
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
     dispatch({type: "REORDER_QUESTIONS"});
  }, [dispatch])

  return (
    <div className="App">
      <h1>Quiz de programação!</h1>
      {quizState.gameStage === "Start" &&  <Welcome />}
      {quizState.gameStage === "Playing" &&  <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
