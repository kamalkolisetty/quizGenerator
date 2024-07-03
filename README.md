
# Quiz App

A simple quiz application built with React, Tailwind CSS, and React Router. This application allows users to create quizzes, view a list of available quizzes, and take quizzes with multiple-choice questions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/yourusername/quiz-app.git](https://github.com/kamalkolisetty/quizGenerator)
   cd quizGenerator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

## Usage

1. **Create a Quiz:**
   - Navigate to the "Create Quiz" page.
   - Enter a quiz title.
   - Add questions with four options each and specify the correct answer.
   - Submit the quiz to save it.

2. **View Available Quizzes:**
   - Go to the "Available Quizzes" page to see a list of all quizzes.

3. **Take a Quiz:**
   - Click on a quiz from the list to start taking it.
   - Answer the questions and submit your answers.
   - See the results immediately.

## Features

- Create and save multiple quizzes.
- Store quizzes in local storage to persist data.
- List all available quizzes.
- Take quizzes with multiple-choice questions.
- Validate correct answers and display results.

## Project Structure

```plaintext
src/
├── assets/
├── components/
│   ├── CreateQuiz.jsx
│   ├── QuizList.jsx
│   ├── TakeQuiz.jsx
│   └── Footer.jsx
├── context/
│   └── QuizContext.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Dependencies

- React
- React Router DOM
- Tailwind CSS
