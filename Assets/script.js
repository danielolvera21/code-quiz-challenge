var title = document.querySelector('.title');
var startBtn = document.querySelector('.start-btn');
const questions = [
    {
        question: "What does CSS stand for?",
        answers: {
            a: 'California Sauteed Shrimp',
            b: 'Cascading Style Sheet',
            c: 'Carlos Sounds Sleepy',
            d: 'Corporate Standing Services'
        },
        correctAnswer: 'b'
    },
    {
        question: '___ is the standard markup language for creating web pages.',
        answers: {
            a: "NFT",
            b: "Javascript",
            c: "HTML",
            d: "ESPN"
        },
        correctAnswer: 'c'
    },
    {
        question: 'Which of these is NOT a way to assign a variable?',
        answers: {
            a: "bruh",
            b: "let",
            c: "const",
            d: "var"
        },
        correctAnswer: "a"
    },
    {
        question: "User behavior, such as a mouse click, is referred to as a(n) _____.",
        answers: {
            a: "show",
            b: "event",
            c: "party",
            d: "hootenanny"
        },
        correctAnswer: "b"
    }
];

function startQuiz() {
    //var startBtn = document.querySelector(".start-btn");
    //console.log(startBtn);

    startTimer();

};

function startTimer() {
    var timeLeft = 60;
    var timerBegin = setInterval(function () {
        if (timeLeft > 0) {
            title.textContent = timeLeft;
            timeLeft--;
        } else {
            title.textContent = "TIME'S UP!!!";
            clearInterval(timerBegin);
        }
    }, 1000)
};


startBtn.addEventListener('click', startQuiz);