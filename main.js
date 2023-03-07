//constants
const triviaData =[{question:"What’s the diameter of a basketball hoop in inches?",
a: "34 inches",
b: "23 inches",
c: "22 inches",
d: "18 inches",
correct: "d",},
{}
]

//state variables
let score;
let quizCurrent;


// cached elements
const quiz = document.getElementById("quiz")
const questionElement = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitButton = document.getElementById("submit")