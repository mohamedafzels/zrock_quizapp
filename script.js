"use strict";

const quizData = [
 {
  question: "Which of the following tag is used for inserting the largest heading in HTML?",
  a: "<h3>",
  b: "<h1>",
  c: "<h5>",
  d: "<h6>",
  correct: "b"
 },

 {
  question: "How do you insert a comment in a css file?",
  a: "//this is a comment//",
  b: "/*this is a comment/*",
  c: "/*this is a comment*/",
  d: "//this is a comment",
  correct: "c"
 },
 {
  question: "What does CSS stand for?",
  a: "Central Style Sheets",
  b: "Cascading Style Sheets",
  c: "Cascading Simple Sheets",
  d: "Cars SUVs Sailboats",
  correct: "b"
 },
 {
  question: "What does HTML stand for?",
  a: "Hypertext Markup Language",
  b: "Hypertext Markdown Language",
  c: "Hyperloop Machine Language",
  d: "Helicopters Terminals Motorboats Lamborginis",
  correct: "a"
 },
 {
  question: "Who created JavaScript language?",
  a: "Brendan Eich",
  b: "Douglas Crockford",
  c: "James Gosline",
  d: "none of the above",
  correct: "a"
 }
];

const quiz = document.querySelector(".quiz-body");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const footerEl = document.querySelector(".quiz-footer");
const quizDetailEl = document.querySelector(".quiz-details");
const liEl = document.querySelector("ul li");

const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const c_txt = document.getElementById("c_text");
const d_txt = document.getElementById("d_text");
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
 deselectAnswers();
 const currentQuizData = quizData[currentQuiz];
 questionEl.innerText = currentQuizData.question;
 a_txt.innerText = currentQuizData.a;
 b_txt.innerText = currentQuizData.b;
 c_txt.innerText = currentQuizData.c;
 d_txt.innerText = currentQuizData.d;
 quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length}</p>`;
}

// deselect
function deselectAnswers() {
 answerEl.forEach((answerEl) => {
  answerEl.checked = false;
 });
}

// get selected
function getSelected() {
 let answer;
 answerEl.forEach((answerEls) => {
  if (answerEls.checked) {
   answer = answerEls.id;
  }
 });
 return answer;
}

btnSubmit.addEventListener("click", function () {
 const answers = getSelected();

 if (answers) {
  if (answers === quizData[currentQuiz].correct) {
   score++;
  }
  nextQuestion();
 }
});

// next Slide
function nextQuestion() {
 currentQuiz++;

 if (currentQuiz < quizData.length) {
  loadQuiz();
 } else {
  quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} question correctly</h2>
    <button type="button" onclick="location.reload()">Reload</button>
    `;
  footerEl.style.display = "none";
 }
}