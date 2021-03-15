const quizData = [
    {
        question: "what is the president of tunisia",
        a: "ghannouchi",
        b: "ben ali",
        c: "beji",
        d: "kaies Saied",
        correct: "d"
    },
    {
        question: "what the capital of tunisia",
        a: "soussa",
        b: "Sfax",
        c: "Tunis",
        d: "Jandouba",
        correct: "c"
    },
    {
        question: "what is Javascript",
        a: "programming language",
        b: "music",
        c: "text editor",
        d: "Tv Show",
        correct: "a"
    }
]

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('quest')
const ansA = document.getElementById('a-text')
const ansB = document.getElementById('b-text')
const ansC = document.getElementById('c-text')
const ansD = document.getElementById('d-text')
const button = document.getElementById('btn')
const answersEl = document.querySelectorAll('.answer')

let currentQuiz = 0;
let score = 0;

loadQuizz();

function loadQuizz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    ansA.innerText = currentQuizData.a
    ansB.innerText = currentQuizData.b
    ansC.innerText = currentQuizData.c
    ansD.innerText = currentQuizData.d
}

function getSelected() {

    let answer = undefined
    answersEl.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function deselectAnswers() {
    answersEl.forEach(answerEl => {
        answerEl.checked = false;
    })
}


button.addEventListener('click', () => {

    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuizz()
        }
        else {
            quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} </h2><button onclick="location.reload()" >Reload</button>`
        }
    }
})


