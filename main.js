//constants
const triviaData =[
{question:"What's the diameter of a basketball hoop in inches?",
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
a: "PGA Tour",
b: "The Master",
c: "The Finals",
d: "The Players Championship",
correct: "b",},
{question: "The Triple Crown award is given to a horse that wins which three races?",
a: "The Kentucky Derby, Preakness Stakes, and Belmont Stakes.",
b:"Coca Cola 600, Dixie Vodka 400, Daytona 500",
c:"Premier Series., Touring Pro Division, Velocity Tour.",
d:"Justice League, Adventures, Marvel Studios",
correct: "a",
},
]

//state variables
let score 
let quizCurrent 


// cached elements
const quiz = document.getElementById("quiz")
const answerElements = document.querySelectorAll(".answer")
const questionElement = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitButton = document.getElementById("submit")
const msg = document.getElementById("message")

// event listeners
submitButton.addEventListener('click',clickHandle)

//intialize state variables
function intialize(){
     score = 0
     quizCurrent = 0
    render()
}
// functions
intialize()
function render(){
    setQuestion()
}

function setQuestion(){
    deselectAnswers()
    const currentTriviaData = triviaData[quizCurrent]
    questionElement.textContent = currentTriviaData.question
    a_text.textContent = currentTriviaData.a
    b_text.textContent = currentTriviaData.b
    c_text.textContent = currentTriviaData.c
    d_text.textContent = currentTriviaData.d
}
function deselectAnswers() {
    answerElements.forEach(answerEl =>{
        answerEl.checked = false
    })
}
function getSelected() {
    let answer
    answerElements.forEach(answerEl => {
    if (answerEl.checked) {
    answer = answerEl.id
}
})
    return answer
}

function changeQuestion(){
    setQuestion()
}
 
 function clickHandle(){
    const answer = getSelected()
    if(answer){
        if(answer===triviaData[quizCurrent].correct){
            score++
        }
        quizCurrent++
    }
    if(quizCurrent < triviaData.length){
       changeQuestion()
    }
    else{
        quiz.innerHTML = `<h2>You've answered ${score}/${triviaData.length} questions correctly</h2>
                          <button onclick="location.reload()">Play Again</button>`
    }
}
           



    

    


 