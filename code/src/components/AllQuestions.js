import React, { useState } from "react";

import Question from "./Question";
import ReviewSubmit from "./ReviewSubmit";

const questions = [
  {
    number: 1,
    text: "What is your favourite colour?",
    inputType: "text",
    options: ["red", "blue", "green", "yellow"],
  },
  {
    number: 2,
    text: "What is your second favourite colour?",
    inputType: "radio",
    options: ["red", "blue", "green", "yellow", "purple"],
  },
  {
    number: 3,
    text: "What is your third favourite colour?",
    inputType: "select",
    options: ["red", "blue", "green", "yellow", "orange"],
  },
];

const AllQuestions = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSubmission = (event) => {
    event.preventDefault();
    setQuestionNumber(questionNumber + 1);
  };

  const onAnswerChange = (newAnswer) => {
    answers[questionNumber] = newAnswer;
    setAnswers(answers);
  };

  const lastQuestion = questionNumber === questions.length - 1;

  return (
    <>
      {questionNumber < questions.length ? (
        <form onSubmit={handleSubmission}>
          <Question
            key={questions[questionNumber].number}
            question={questions[questionNumber]}
            answer={answers[questionNumber]}
            setAnswer={onAnswerChange}
          />
          <button type="submit">
            {lastQuestion ? "Submit" : "Next Question"}
          </button>
        </form>
      ) : (
        <ReviewSubmit answers={answers}/>
      )}
    </>
  );
};

export default AllQuestions;
