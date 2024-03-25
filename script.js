const questions = [
    {
        questions: 'Which is the largest animal in the world?',
        answers: [
            { text: 'Shark', correct: false},
            { text: 'Blue whale', correct: true},
            { text: 'Elephant', correct: false},
            { text: 'Giraffe', correct: false},

        ]
    },
    {
        questions: 'Which is the smallest country in the world?',
        answers: [
            { text: 'Vatican city', correct: true},
            { text: 'Bhutan', correct: true},
            { text: 'Nepal', correct: false},
            { text: 'Shri lanka', correct: false},

        ]
    },
    {
        questions: 'Which is the largest desert in the world?',
        answers: [
            { text: 'Kalahari', correct: false},
            { text: 'Gobi', correct: true},
            { text: 'Sahara', correct: false},
            { text: 'Antartica', correct: true},

        ]
    },{
        questions: 'Which is the smallest continent in the world?',
        answers: [
            { text: 'Asia', correct: false},
            { text: 'Australia', correct: true},
            { text: 'Arctic', correct: false},
            { text: 'Africa', correct: false},

        ]
    }
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
    })
}