import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    setQuizzes(storedQuizzes);
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Available Quizzes</h2>
      {quizzes.length === 0 ? (
        <p>No quizzes available.</p>
      ) : (
        quizzes.map((quiz, index) => (
          <div key={index} className="bg-gray-100 p-4 mb-4 rounded-md hover:bg-blue-100 transform hover:scale-105">
          <h3 className="text-lg font-semibold">{quiz.title}</h3>
          <Link
            to={`/take-quiz/${index+1}`}
            className="block text-blue-500 hover:underline"
            style={{ transition: 'background-color 0.3s' }}
          >
            <br />
            <span className=" bg-transparent hover:bg-red-200 py-3 hover:p-2  rounded">Take Quiz</span>
          </Link>
        </div>
        ))
      )}
    </div>
  );
};

export default QuizList;
