import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from './QuizContext';

const CreateQuiz = () => {
  const { addQuiz } = useQuizContext();
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const navigate = useNavigate();

  const handleAddQuestion = () => {
    if (!question.trim() || options.some(opt => !opt.trim())) {
      alert('Please provide both question and all options.');
      return;
    }

    if (options.filter(opt => opt.trim() !== '').length !== 4) {
      alert('Please provide exactly 4 options.');
      return;
    }

    if (!options.includes(correctAnswer.trim())) {
      alert('Correct answer must be one of the provided options.');
      return;
    }

    const newQuestion = {
      question: question.trim(),
      options: options.map(opt => opt.trim()),
      correctAnswer: correctAnswer.trim()
    };

    setQuestions([...questions, newQuestion]);
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
  };

  const handleSubmit = () => {
    if (!title.trim()) {
      alert('Please provide a quiz title.');
      return;
    }

    if (questions.length === 0) {
      alert('Please add at least one question.');
      return;
    }

    const quiz = {
      title: title.trim(),
      questions
    };

    addQuiz(quiz);
    navigate('/');
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create Quiz</h2>
        <input
          type="text"
          placeholder="Quiz Title"
          className="w-full p-2 mb-4 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h3 className="text-xl font-semibold mb-2">Questions</h3>
        <input
          type="text"
          placeholder="Question"
          className="w-full p-2 mb-4 border rounded"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            className="w-full p-2 mb-2 border rounded"
            value={option}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
          />
        ))}
        <input
          type="text"
          placeholder="Correct Answer"
          className="w-full p-2 mb-4 border rounded"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleAddQuestion}
        >
          Add Question
        </button>
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

export default CreateQuiz;
