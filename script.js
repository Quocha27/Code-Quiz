// WRITE YOUR CODE HERE
var time = 10
var timeInterval
var q1a1 =document.createElement("button"):
var q1a2 =document.createElement("button"):
var q1a3 =document.createElement("button"):
var q1a4 =document.createElement("button"):
var q1a1 =document.createElement("button"):
var q1a2 =document.createElement("button"):
var q1a3 =document.createElement("button"):
var q1a4 =document.createElement("button"):
var q1a1 =document.createElement("button"):
var q1a2 =document.createElement("button"):
var q1a3 =document.createElement("button"):
var q1a4 =document.createElement("button"):
var q1a1 =document.createElement("button"):
var q1a2 =document.createElement("button"):
var q1a3 =document.createElement("button"):
var q1a4 =document.createElement("button"):
var q1a1 =document.createElement("button"):
var q1a2 =document.createElement("button"):
var q1a3 =document.createElement("button"):
var q1a4 =document.createElement("button"):
function clock(){

 timeInterval = setInterval(counter, 1000) 
}
function counter(){
    time--
    console.log(time)
    if (time == 0) {
        clearInterval(timeInterval); //stops setInterval from running
        console.log("game over")
    }
}
clock(); //calls for function to run.




for (var i = 0; i < 5; i++) {
    console.log(`The current value of i is ${i}`);
}

var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

for (var i = 0; i < zooAnimals.length; i++) {
    console.log(`I am going to the zoo to see ${zooAnimals[i]}`);
}

var newObj = { name: "Quoc" }
console.log(`Hi my name is ${newObj.name}`)
var counter = 1
var questions = [
    {
        question: "Commonly used data types DO NOT include:", 
        answer1: "strings",
        answer2: "booleans",
        answer3: "alerts",
        answer4: "numbers"
    },
    {
    question: "How would you link your javascript to your html?", 
    answer1: "Send the JS to to the Html page",
    answer2: "Put the .js file into the CSS file",
    answer3: "Grab the .js file path and place it into the index.html using <script> "
    },
    {
    question: "The condition in an if/else statement is enclosed within", 
    answer1: "quotes",
    answer2: "curly brackets",
    answer3: "parenthesis",
    answer4: "square brackets",
    },
    {
    question: "What do you need to run a function", 
    answer1: "parenthesis and semit colon",
    answer2: "square brackets",
    answer3: "back ticks",
    answer4: "swigly lines",
    },
    {
    question: "Arrays in Javascript can be used to store", 
    answer1: "numbers and strings",
    answer2: "in paraenthese within a funtion",
    answer3: "They are called out in an array",
    answer4: "all the above",
    },
    {
    question: "What is a useful tool you can use to debug and print out your functions and variables", 
    answer1: "console.log",
    answer2: "for loops",
    answer3: "Github",
    answer4: "Gitbash",
    },
    
]
console.log(questions[counter].question)
console.log(questions[counter].answer1)
console.log(questions[counter].answer2)