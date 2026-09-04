// Step 1: Store every question and its possible answers.
const questions = [
  {
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    correct: "const"
  },
  {
    question: "Which method is used to add an item to the end of an array?",
    options: ["push()", "pop()", "shift()", "slice()"],
    correct: "push()"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language"
    ],
    correct: "HyperText Markup Language"
  },
  {
    question: "Which CSS property changes the text color?",
    options: ["font-size", "color", "background", "padding"],
    correct: "color"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["<!-- -->", "#", "//", "/* */"],
    correct: "//"
  }
];

// Step 2: Find the HTML elements that JavaScript needs to update.
const scoreValue = document.getElementById("scoreValue");
const questionCounter = document.getElementById("questionCounter");
const progressLabel = document.getElementById("progressLabel");
const progressFill = document.getElementById("progressFill");
const questionTag = document.getElementById("questionTag");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Step 3: Keep track of the current question and the user's answers.
let currentQuestionIndex = 0;
let selectedAnswers = Array(questions.length).fill(null);

// Step 4: Count the answers that match the correct answers.
function calculateScore() {
  return questions.reduce((score, question, index) => {
    const answerIsCorrect = selectedAnswers[index] === question.correct;
    return answerIsCorrect ? score + 1 : score;
  }, 0);
}

// Step 5: Show the current score.
// function updateScore() {
//   scoreValue.textContent = `${calculateScore()} / ${questions.length}`;
// }

// // Step 6: Update the question number and progress bar.
// function updateProgress() {
//   const questionNumber = currentQuestionIndex + 1;
//   const progressPercent = (questionNumber / questions.length) * 100;

//   questionCounter.textContent = `Question ${questionNumber}`;
//   questionTag.textContent = `Question ${questionNumber}`;
//   progressLabel.textContent = `${Math.round(progressPercent)}%`;
//   progressFill.style.width = `${progressPercent}%`;
// }

// // Step 7: Draw the question and create one button for each answer.
// function renderQuestion() {
//   const question = questions[currentQuestionIndex];

//   questionText.textContent = question.question;
//   optionsContainer.innerHTML = "";

//   question.options.forEach((option, optionIndex) => {
//     const answerButton = document.createElement("button");
//     answerButton.type = "button";
//     answerButton.className = "option-btn";
//     answerButton.innerHTML = `
//       <span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span>
//       <span class="option-text">${option}</span>
//     `;

//     if (selectedAnswers[currentQuestionIndex] === option) {
//       answerButton.classList.add("selected");
//     }

//     answerButton.addEventListener("click", () => selectAnswer(option));
//     optionsContainer.appendChild(answerButton);
//   });

//   prevBtn.disabled = currentQuestionIndex === 0;
//   nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
//   updateProgress();
// }

// // Step 8: Save the selected answer and redraw the buttons.
// function selectAnswer(answer) {
//   selectedAnswers[currentQuestionIndex] = answer;
//   updateScore();
//   renderQuestion();
// }

// // Step 9: Move back one question.
// prevBtn.addEventListener("click", () => {
//   if (currentQuestionIndex > 0) {
//     currentQuestionIndex -= 1;
//     renderQuestion();
//   }
// });

// // Step 10: Move forward, or show the final result on the last question.
// function goToNextQuestion() {
//   if (currentQuestionIndex < questions.length - 1) {
//     currentQuestionIndex += 1;
//     renderQuestion();
//     return;
//   }

//   showResult();
// }

// nextBtn.onclick = goToNextQuestion;

// // Step 11: Replace the questions with the final score.
// function showResult() {
//   const finalScore = calculateScore();

//   questionText.textContent = `Quiz complete! You scored ${finalScore} out of ${questions.length}.`;
//   optionsContainer.innerHTML = `
//     <div class="result-box">
//       <p>Great effort!</p>
//       <span>${finalScore >= 3 ? "Nice work - you did well." : "Keep practicing and try again!"}</span>
//     </div>
//   `;
//   questionCounter.textContent = "Finished";
//   questionTag.textContent = "Result";
//   progressLabel.textContent = "100%";
//   progressFill.style.width = "100%";
//   prevBtn.disabled = true;
//   nextBtn.textContent = "Restart";
//   nextBtn.onclick = restartQuiz;
// }

// // Step 12: Reset the state and start the quiz again.
// function restartQuiz() {
//   currentQuestionIndex = 0;
//   selectedAnswers = Array(questions.length).fill(null);
//   nextBtn.onclick = null;
//   updateScore();
//   renderQuestion();
// }

// // Step 13: Start the quiz when the page loads.
// updateScore();
// renderQuestion();
