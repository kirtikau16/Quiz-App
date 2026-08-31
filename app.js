// This is the quiz data.
// Each object contains one question, all possible answers, and the correct answer.
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

// Get all the HTML elements we need to update.
// const scoreValue = document.getElementById("scoreValue");
// const questionCounter = document.getElementById("questionCounter");
// const progressLabel = document.getElementById("progressLabel");
// const progressFill = document.getElementById("progressFill");
// const questionTag = document.getElementById("questionTag");
// const questionText = document.getElementById("questionText");
// const optionsContainer = document.getElementById("optionsContainer");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");

// // These variables keep track of the current state of the quiz.
// let currentQuestion = 0; // current question index
// let selectedAnswers = Array(questions.length).fill(null); // stores the user's selected answer for each question

// // This function counts how many answers are correct.
// function calculateScore() {
//   return questions.reduce((total, question, index) => {
//     const selected = selectedAnswers[index];
//     return total + (selected === question.correct ? 1 : 0);
//   }, 0);
// }

// // Update the score text shown in the top-right card.
// function updateScore() {
//   const currentScore = calculateScore();
//   scoreValue.textContent = `${currentScore} / ${questions.length}`;
// }

// // Update the progress bar and question number text.
// function updateProgress() {
//   const percent = ((currentQuestion + 1) / questions.length) * 100;
//   progressFill.style.width = `${percent}%`;
//   progressLabel.textContent = `${Math.round(percent)}%`;
//   questionCounter.textContent = `Question ${currentQuestion + 1}`;
//   questionTag.textContent = `Question ${currentQuestion + 1}`;
// }

// // This function draws the current question and its answer buttons.
// function renderQuestion() {
//   const q = questions[currentQuestion];

//   // Show the current question text.
//   questionText.textContent = q.question;

//   // Clear old buttons before adding new ones.
//   optionsContainer.innerHTML = "";

//   // Create a button for each answer option.
//   q.options.forEach((option, index) => {
//     const btn = document.createElement("button");
//     btn.type = "button";
//     btn.className = "option-btn";

//     const letter = String.fromCharCode(65 + index);

//     // If this option was already selected, highlight it.
//     if (selectedAnswers[currentQuestion] === option) {
//       btn.classList.add("selected");
//     }

//     btn.innerHTML = `
//       <span class="option-letter">${letter}</span>
//       <span class="option-text">${option}</span>
//     `;

//     // When a user clicks an answer, save it and re-render the question.
//     btn.addEventListener("click", () => {
//       selectedAnswers[currentQuestion] = option;
//       updateScore();
//       renderQuestion();
//     });

//     optionsContainer.appendChild(btn);
//   });

//   // Disable Previous button on the first question.
//   prevBtn.disabled = currentQuestion === 0;

//   // Change the Next button label depending on whether this is the last question.
//   nextBtn.textContent = currentQuestion === questions.length - 1 ? "Finish" : "Next";

//   updateProgress();
// }

// // Go to the previous question.
// prevBtn.addEventListener("click", () => {
//   if (currentQuestion > 0) {
//     currentQuestion -= 1;
//     renderQuestion();
//   }
// });

// // Go to the next question or finish the quiz.
// nextBtn.addEventListener("click", () => {
//   // If we are not on the last question, go to the next one.
//   if (currentQuestion < questions.length - 1) {
//     currentQuestion += 1;
//     renderQuestion();
//     return;
//   }

//   // If we are on the last question, show the final score.
//   const finalScore = calculateScore();

//   questionText.textContent = `Quiz complete! You scored ${finalScore} out of ${questions.length}.`;
//   optionsContainer.innerHTML = `
//     <div class="result-box">
//       <p>Great effort!</p>
//       <span>${finalScore >= 3 ? "Nice work — you did well." : "Keep practicing and try again!"}</span>
//     </div>
//   `;

//   questionCounter.textContent = "Finished";
//   questionTag.textContent = "Result";
//   progressLabel.textContent = "100%";
//   progressFill.style.width = "100%";
//   prevBtn.disabled = true;
//   nextBtn.textContent = "Restart";

//   // Restart button behavior.
//   nextBtn.onclick = () => {
//     currentQuestion = 0;
//     selectedAnswers = Array(questions.length).fill(null);
//     updateScore();
//     nextBtn.onclick = null;
//     renderQuestion();
//   };
// });

// // Start the quiz when the page loads.
// updateScore();
// renderQuestion();
