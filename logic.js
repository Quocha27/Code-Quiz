var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

function clockTick() {
  time--;
  timerEl.textContent = time;
}

function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.removeAttribute("class");

  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);
  choicesEl.innerHTML = ""
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var buttonEl = document.createElement("button")
    buttonEl.setAttribute("value", currentQuestion.choices[i]);
    buttonEl.textContent = `${i + 1}  ${currentQuestion.choices[i]}`;
    choicesEl.appendChild(buttonEl);
    buttonEl.onclick = userClick;
  };
}

function userClick() {
  console.log(currentQuestionIndex);
  if (this.value !== questions[currentQuestionIndex].answer) {
    // time is 50
    time = time - 10; // time is 40

    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    // currentQuestionIndex is 0 
    // currentQuestionIndex is 1
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      endQuiz();
    } else {
      getQuestion();
    }
  } else {
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      endQuiz();
    } else {
      getQuestion();
    }
  }

  function endQuiz() {
    clearInterval(timerId);
    var endScreen = document.getElementById("end-screen");
    endScreen.removeAttribute("class");
    var finalScore = document.getElementById("final-score");
    finalScore.textContent = time;
    questionsEl.setAttribute("class", "hide");
  }

}

function displayScore() {
var userInitial = initialsEl.value;
 // get saved scores from localstorage, or if not any, set to empty array
 var highscores =
 JSON.parse(window.localStorage.getItem("highscores")) || [];

// format new score object for current user
var newScore = {
 score: time,
 initials: userInitial
};

// save to localstorage
highscores.push(newScore);
window.localStorage.setItem("highscores", JSON.stringify(highscores));
// redirect to next page
window.location.href = "highscores.html";
 }
startBtn.onclick = startQuiz;
submitBtn.onclick = displayScore;

