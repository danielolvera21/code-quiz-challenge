var title = document.querySelector('.title');
var startBtn = document.querySelector('.start-btn');

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