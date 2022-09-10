import React from "react";
import { useState } from "react";
const Quiz = () => {
  const questions = [
    {
      question: "India's largest city by population ?",
      options: [
        { answer: "Delhi", isCorrect: false },
        { answer: "Mumbai", isCorrect: true },
        { answer: "Pune", isCorrect: false },
        { answer: "Chennai", isCorrect: false },
      ],
    },
    {
      question: "Number of State and Union Territories in india? ",
      options: [
        { answer: "27 State and 8 Union Territories", isCorrect: false },
        { answer: "27 State and 6 Union Territories", isCorrect: false },
        { answer: "23 State and 10 Union Territories", isCorrect: false },
        { answer: "29 State and 7 Union Territories", isCorrect: true },
      ],
    },
    {
      question: "National Motto of india? ",
      options: [
        { answer: "Satyameva Jayate", isCorrect: true },
        { answer: "Jay Hind", isCorrect: false },
        { answer: "Vande Mataram", isCorrect: false },
        { answer: "Ma tujhe salama", isCorrect: false },
      ],
    },
    {
      question: "What is the name of india's National Aquatic Animal?  ",
      options: [
        { answer: "katla Fish", isCorrect: false },
        { answer: "Crocodile", isCorrect: false },
        { answer: "River Dolphin", isCorrect: true },
        { answer: "Green Frog", isCorrect: false },
      ],
    },
    {
      question: "'Operation Flood ' is a movement related with the product ? ",
      options: [
        { answer: "Milk", isCorrect: true },
        { answer: "Fresh Water", isCorrect: false },
        { answer: "Rice ", isCorrect: false },
        { answer: "None of the above", isCorrect: false },
      ],
    },
    {
      question:
        " The first indian newspaper to offer an online edition on internet ",
      options: [
        { answer: "Times of India", isCorrect: false },
        { answer: "Hindustan Times ", isCorrect: false },
        { answer: "Anandabazar Patrika ", isCorrect: false },
        { answer: "The Hindu ", isCorrect: true },
      ],
    },
  ];
  const [currentQue, setcurrentQue] = useState(0);
  const [showScore, setshowScore] = useState(false);
  const [score, setscore] = useState(0);
  const handleAnsClick = (isCorrect) => {
    if (isCorrect === true) {
      setscore(score + 1);
    }
    const nextQuestion = currentQue + 1;
    if (nextQuestion < questions.length) {
      setcurrentQue(nextQuestion);
    } else {
      setshowScore(true);
    }
  };
  return (
    <>
      <div className="quiz-wrap">
        {showScore ? (
          <div className="app">
            <div className="quiz-score">
              your score is {score} out of {questions.length}
            </div>
            <div className="try-again-btn">
              <button
                className="quiz-btn quiz-score-btn"
                onClick={() => window.location.reload(false)}
              >
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <div className="app">
            <div>
              <div>
                <span>question : {currentQue + 1}</span>/{questions.length}
              </div>
              <div> {questions[currentQue].question}</div>
            </div>
            <div>
              {questions[currentQue].options.map((options) => (
                <button
                  className="quiz-btn"
                  onClick={() => handleAnsClick(options.isCorrect)}
                >
                  {options.answer}{" "}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
