const quizQuestions = [
    { question: "Which city in India is also known as pink city?", answer: "Jaipur" },
    { question: "What is the chemical symbol of water?", answer: "H2O" },
    { question: "Which planet is closest to sun?", answer: "mercury" },
    { question: "Which is the largest ocean in the world?", answer: "The Pacific Ocean" },
    { question: "How many states are there in INDIA?", answer: "28" }
];

function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);
        let cleanedAnswer = userAnswer.toLowerCase().trim();

        if (cleanedAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }

    alert("Your final score is: " + score + " out of " + quizQuestions.length);
}

runQuiz();
