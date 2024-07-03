import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuizContext } from './QuizContext';

const TakeQuiz = () => {
  const { id } = useParams();
  const { quizzes } = useQuizContext();

  const quizIndex = parseInt(id, 10) - 1; // Assuming id is 1-based
  const quiz = quizzes[quizIndex];

  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    if (quiz) {
      setUserAnswers(new Array(quiz.questions.length).fill(''));
    }
  }, [quiz]);

  if (!quiz) {
    return <p>Loading quiz...</p>;
  }

  const handleAnswerSelect = (questionIndex, selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quiz.questions[index].correctAnswer) {
        score++;
      }
    });
    alert(`You scored ${score} out of ${quiz.questions.length}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{quiz.title}</h2>
      <div className="bg-gray-100 p-4 mb-4 rounded-md">
        {quiz.questions.map((question, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{question.question}</h3>
            <ul className="ml-4">
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`question_${index}`}
                      value={option}
                      checked={userAnswers[index] === option}
                      onChange={() => handleAnswerSelect(index, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default TakeQuiz;
