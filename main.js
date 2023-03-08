//constants
const triviaData =[{question:"What's the diameter of a basketball hoop in inches?",
a: "34 inches",
b: "23 inches",
c: "22 inches",
d: "18 inches",
correct: "d",},
{question:"The Olympics are held every how many years?",
a: "4 years",
b: "9 years",
c: "12 years",
d: "7 years.",
correct: "a",},
{question: " What sport is best known as the ‘king of sports’?",
a: "football",
b: "basketball",
c: "soccer",
d: "hockey",
correct: "c",},
{question: "Which golf tournament did Tiger Woods win by 12 strokes cementing his first-ever major championship win?",
a: "The Chicken",
b: "The Master",
c: "The Finals",
d: "The Derby",
correct: "b",}
]

//state variables
let score = 0;
let quizCurrent = 0;


// cached elements
const quiz = document.getElementById("quiz")
const questionElement = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitButton = document.getElementById("submit")

// event listeners
submitButton.addEventListener('click',move)

//intialize state variables
function intialize(){
    let score = 0
    let quizCurrent = 0
    render()
}
// functions
intialize()

function render(){
    const currentTriviaData = triviaData[quizCurrent]
    questionElement.innerHTML = currentTriviaData.question
    a_text.innerHTML = currentTriviaData.a
    b_text.innerHTML = currentTriviaData.b
    c_text.innerHTML = currentTriviaData.c
    d_text.innerHTML = currentTriviaData.d
}