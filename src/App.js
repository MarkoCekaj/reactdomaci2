import "./App.css";
import React, { useState } from "react";
import { questions } from "./components/questions/questions";
import Confetti from "react-confetti";
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const buttonClickAnswer = (correct) => {
    if (correct) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="App">
      {showScore ? (
        <div id="scoreSection">
          <Confetti />
          Points: {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div>
            <h1>Africa Capital Cities Quiz</h1>
            <div id="questionSection">
              {questions[currentQuestion].question}
            </div>

            <div id="answerSection">
              {questions[currentQuestion].answers.map((answer) => (
                <button onClick={() => buttonClickAnswer(answer.correct)}>
                  {answer.answer}
                </button>
              ))}
            </div>
            <div>
              {}
              Question {currentQuestion + 1} out of {questions.length}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
