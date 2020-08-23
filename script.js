$(document).ready(function () {
    console.log("ready!");
});
//Get elements
const startButton = document.getElementById('startButtonEl');
let question = document.getElementById('questionEl');
let answers = document.getElementById('answersEl');
//Score 
let score = 0;
//Timer
let timeRemaining = 60;
let currentQuestion = 0;

//listen for game start
startButton.addEventListener('click', startGame);
//hide answers
answers.style.visibility = 'hidden';

function startGame() {
    setTime();
    alert('The game has started');
    startButton.style.visibility = 'hidden';
    answers.style.visibility = 'visible';
    setQuestion();
}

function setQuestion() {
    //Checks if its time to end the game
    if (currentQuestion == questions.length) {
        endGame();
    }
    //create the question
    question.innerText = questions[currentQuestion].questionText;
    //create answer buttons
    let answerButton1 = $("<button>");
    answerButton1.attr("id", "button1");
    let answerButton2 = $("<button>");
    answerButton2.attr("id", "button2");
    let answerButton3 = $("<button>");
    answerButton3.attr("id", "button3");
    let answerButton4 = $("<button>");
    answerButton4.attr("id", "button4");
    //adds text from questions object
    answerButton1.text(questions[currentQuestion].questionAnswers[0]);
    answerButton2.text(questions[currentQuestion].questionAnswers[1]);
    answerButton3.text(questions[currentQuestion].questionAnswers[2]);
    answerButton4.text(questions[currentQuestion].questionAnswers[3]);
    //append
    $("#answersEl").append(answerButton1);
    $("#answersEl").append(answerButton2);
    $("#answersEl").append(answerButton3);
    $("#answersEl").append(answerButton4);
    //events
    $("#button1").on("click", function (e) {
        answerChecker(questions[currentQuestion].questionAnswers[0])
    });
    $("#button2").on("click", function (e) {
        answerChecker(questions[currentQuestion].questionAnswers[1])
    });
    $("#button3").on("click", function (e) {
        answerChecker(questions[currentQuestion].questionAnswers[2])
    });
    $("#button4").on("click", function (e) {
        answerChecker(questions[currentQuestion].questionAnswers[3])
    });

}

//evaluate the answer
function answerChecker(selection) {

    if (questions[currentQuestion].correctAnswer == selection) {
        score++;
        alert("Correct! Your current score: " + score)
        currentQuestion++;
        clear();
        setQuestion();
        console.log(score)
    }
    else {
        alert("Incorrect! Try again.")
        timeRemaining -= 10;
    }
}

//clears the elements
function clear() {
    $("#answersEl").empty();
}

//set time 
function setTime() {
    let timerInterval = setInterval(function () {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval)
            return endGame();
        }
    }, 1000);
}

//end game 
function endGame() {
    alert(`Game Over! Your score: ${score}`)
    let userName = window.prompt("Enter your name: ");
    localStorage.setItem(userName, score);
    location.reload();
}

//restart
function restart() {
    timeRemaining = 60;
    currentQuestion = 1;
    score = 0;
    startGame();
}

const questions = [
    {
        questionText: 'What is two plus two?',
        questionAnswers: ['4', '9', '15', '700'],
        correctAnswer: '4',
    },
    {
        questionText: 'Which language creates the "style" for a website?',
        questionAnswers: ['JavaScript', 'C', 'Ruby', 'CSS'],
        correctAnswer: 'CSS',
    },
    {
        questionText: 'Which is a correct function call in JavaScript?',
        questionAnswers: ['function setNumber', 'setNumber', 'setNumber()', 'setNumber[]'],
        correctAnswer: 'setNumber()',
    },
    {
        questionText: 'Which is an IDE?',
        questionAnswers: ['JavaScript', 'Visual Studio Code', 'iTunes', 'Internet Explorer'],
        correctAnswer: 'Visual Studio Code',
    },
    {
        questionText: 'Which technology enables verion control?',
        questionAnswers: ['Get', 'Git', 'Go', 'Facebook'],
        correctAnswer: 'Git',
    },
    {
        questionText: 'When should you test your code?',
        questionAnswers: ['often', 'only sometimes', 'never', 'when i feel like it'],
        correctAnswer: 'often',
    }
]



