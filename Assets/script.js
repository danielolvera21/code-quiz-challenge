var title = document.querySelector('.title');
var startBtn = document.querySelector('.start-btn');
var questions = [
    {
        question: "What does CSS stand for?",
        answers: [
            'California Sauteed Shrimp',
            'Cascading Style Sheet',
            'Carlos Sounds Sleepy',
            'Corporate Standing Services'
        ],
        correctAnswer: 'Cascading Style Sheet'
    },
    {
        question: '___ is the standard markup language for creating web pages.',
        answers: [
            "NFT",
            "Javascript",
            "HTML",
            "ESPN"
        ],
        correctAnswer: 'HTML'
    },
    {
        question: 'Which of these is NOT a way to assign a variable?',
        answers: [
            "bruh",
            "let",
            "const",
            "var"
        ],
        correctAnswer: "bruh"
    },
    {
        question: "User behavior, such as a mouse click, is referred to as a(n) _____.",
        answers: [
            "show",
            "event",
            "party",
            "hootenanny"
        ],
        correctAnswer: "event"
    }
];

const removeElement = (...els) => {
    for (let el of els) el.remove();
}
var rules = document.getElementById('rules');
var questionBox = document.getElementById("questionsBox");
var answerBox = document.getElementById("answerBox");
var scoreBox = document.getElementById("scoreBox");
var correctWrong = document.getElementById('correct-wrongBox');
var questionCount = 0;
let currentScore = 0;
var timeLeft = 60;


function showQuestions() {

    removeElement(startBtn);
    removeElement(rules);
    if (questionCount < questions.length) {
        questionBox.innerHTML = '<div>' + questions[questionCount].question + '</div>';
        answerBox.textContent = "";
        for (let i = 0; i < questions[questionCount].answers.length; i++) {
            let buttonel = document.createElement('button');
            buttonel.innerText = questions[questionCount].answers[i];
            buttonel.setAttribute('data-id', i);
            buttonel.addEventListener('click', function (event) {
                event.stopPropagation();
                if (buttonel.innerText === questions[questionCount].correctAnswer) {
                    currentScore = currentScore + 100;
                    correctWrong.innerHTML = '<div class="correct">' + 'Correct!' + '</div>'
                    // function to proceed to next question
                } else {
                    currentScore = currentScore - 50;
                    timeLeft = timeLeft - 10;
                    correctWrong.innerHTML = '<div class="wrong">' + 'Incorrect!' + '</div>'
                }
                questionBox.innerHTML = "";
                if (questionCount === questions.length) {
                    return;
                } else {
                    questionCount++;
                    showQuestions()
                }
            });
            answerBox.append(buttonel);
        }
    }
};

function startTimer() {
    showQuestions()
    var timerBegin = setInterval(function () {
        if (timeLeft > 0) {
            title.textContent = timeLeft;
            timeLeft--;
        } else {
            title.textContent = "TIME'S UP!!!";
            clearInterval(timerBegin);
            //function for capturing user score
        }
    }, 1000)
};



startBtn.addEventListener('click', startTimer);