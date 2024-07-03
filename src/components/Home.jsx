import React from 'react';
import QuizList from './QuizList';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Welcome to the Quiz App</h1>
      <QuizList />
    </div>
  );
};

export default Home;
