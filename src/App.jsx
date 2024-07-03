import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateQuiz from './components/CreateQuiz';
import TakeQuiz from './components/TakeQuiz';
import { QuizProvider } from './components/QuizContext';
import styled from 'styled-components';
import Footer from './components/Footer';


const StyledText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;
const App = () => {
  return (
    <StyledText>

    <QuizProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/take-quiz/:id" element={<TakeQuiz />} />
      </Routes>
      <Footer/>
    </QuizProvider>
    </StyledText>
  );
};

export default App;
