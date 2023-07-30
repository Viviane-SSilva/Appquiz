/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="gameover">
        <h2>FIM DE JOGO!</h2>
        <p>Pontuação: {quizState.score} </p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} {""} perguntas.</p>
        <img src={WellDone} alt="FIM DO QUIZ!" />
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
      
    </div>
  )
}

export default GameOver;
