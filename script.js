const startButton = document.getElementById('startButtonEl');
const questionContainer = document.getElementById('questionContainer');
const question = document.getElementById('questionEl');

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('The game has started');
    //startButton.style.visibility='hidden';
    setQuestion();
}

function setQuestion(){
    question.innerText = questions[0].questionText;
}

function chooseAnswer() {
    //if answer is correct increment score

    //if incorrect decrement timer

}

const questions = [
    {
        questionText: 'What is two plus two?',
        questionAnswers: [
            { answerText: '4', correct: true },
            { answerText: '15', correct: false }
        ]
    }
]
