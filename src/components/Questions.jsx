/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./Questions.css";
import Option from "./Option";

const Question = () => {
    // eslint-disable-next-line no-unused-vars
    const [quizState, dispatch] = useContext(QuizContext);

    // eslint-disable-next-line no-unused-vars
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            // eslint-disable-next-line no-undef
            payload: {answer: currentQuestion.answer, option},
        });
    };

    return (
        <div id="question">
            <p>
                Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
            </p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((option) =>(
                    // eslint-disable-next-line react/jsx-key
                    <Option 
                    option={option} 
                    key={option} 
                    answer= {currentQuestion.answer}
                    selectOption={() => onSelectOption(option)} 
                    />
                ))}
            </div>
            {quizState.answerSelected && (<button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>
                Continuar
            </button>)}
        </div>);
};

export default Question;
