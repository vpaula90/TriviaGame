$(document).ready(function() {

// on window load you can click on the radio buttons to start the game and click done to end it
window.onload = function () {
    $("#start").on("click", start);
    $("#done").on("click", done);
};

// timmer area, where it is counting down from 1 min
var intervalId;

function start () {
    // Staying with in the Start function i am injecting the questions and choices onto the DOM, using for loops, one for questions and one for choices. 
    var quizForm = $("<form>");

    for (var i= 0; i< questions.length; i++){
        var questionText = $("<h1>");
    // console.log("questions[i].choices ", questions[i].choices);    
    // console.log("questions[i].choices.length ", questions[i].choices.length);
        
        quizForm.append(questionText);
        for (var j= 0; j< questions[i].choices.length; j++){
    // console.log("questions[i].choices[j] ", questions[i].choices[j]);    
            var choicesText = $("<input type='radio' name='question-" + i + "' value='" + questions[i].choices[j] + "''>" + questions[i].choices[j] + "</input>");
        // try quesiton number as the name
    

            questionText.text(questions[i].question);
            choicesText.text(questions[i].choices);
            
        
            quizForm.append(choicesText);

    
        }

    }
    
    $('#quiz').append(quizForm);
    $("#results").empty();


// Add Done button to the HTML
    $('#done').append("<button>Done!</button>");

// Timer Code Start
    var number = 60;
    clearInterval(intervalId);
    intervalId= setInterval(decrement, 1000);

    function decrement () {
        number--;

        $("#countdown").html("<h1>" + "Time Left: " + number + "</h1>");

        if (number === 0) {
            number = 0
            done();
            alert("Time's Up!");
        }
    }
}
// funtion to stop the timer when you click the done button
function done(){
    clearInterval(intervalId);

// create Form to display results
    function results(){
        var resultsForm = $("<div>");
        var correct = 0;
        var wrong = 0;

// need to create a selection to store the button clicked for the choices.
// console log this area 
        var child = $("#quiz").find("input:checked");
        console.log(child);

        for (var i = 0; i < child.length; i++){
            // for (var j = 0; j< questions.length; j++){
            //     for (var k=0 ; k <questions[j].correctAnswer.length; k++){
            
            if (child[i].value.trim() === questions[i].correctAnswer.trim()){
            correct++;
       
            } else{
                console.log(child[i].value)
                console.log(questions[i].correctAnswer)
            wrong++;
            }
        
}

// call function to check the answers and show results


// Append different variables to the Results Form on HTML
        resultsForm.append("<h2>Correct: " + correct + "</h2>");
        resultsForm.append("<h2>Wrong: " + wrong + "</h2>");

// Clear out Quiz form and replace it with the results form
        $('#quiz').empty();
        $("#done").empty();

// Display results on DOM
        $('#results').append(resultsForm);
    }

    results();
// Reset function do console log to 
}

// Quiz Questions and choices
    var questions = [{
        question: "1. How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?",
        choices: ["He Transfigures into a Shark", " He Kisses a Mermaid", " He Eats Gillyweed", " He performs a buble-head charm"],
        correctAnswer: "He Eats Gillyweed"
    }, {
        question: "2. What is the name of Fred and George's joke shop?",
        choices: ["Weasley Joke Emporium", " Weasleys' Wizard Wheezes", " Fred and George's Wonder Emporium", " Zonko's Joke Shop"],
        correctAnswer: "Weasleys' Wizard Wheezes"
    }, {
        question: "3. Which of these is NOT one of the Unforgivable Curses?",
        choices: ["Cruciatus Curse", " Imperius Curse", " Sectumsempra", " Avada Kedavra "],
        correctAnswer: "Sectumsempra"
    }, {
        question: "4. Who played Lord Voldermont in the movies?",
        choices: ["Jeremy Irons", " Tom Hiddleston", " Gary Oldman", " Ralph Fiennes "],
        correctAnswer: "Ralph Fiennes"
    }, {
        question: "5. Wo guards the entrance to the Gryffindor common room?",
        choices: ["The Grey Lady", " The Fat Friar", " The Bloody Baron", " The Fat Lady "],
        correctAnswer: "The Fat Lady"
    },{
        question: "6. What does Ron see in the Mirror of Erised?",
        choices: ["Himself Kissing Hermoine", " Himself with Lots of money", " Himself with Harry's Lightning Bolt Scar", " Himself Holding the Quidditch Cup"],
        correctAnswer: "Himself Holding the Quidditch Cup"
    },{
        question: "7. Who is NOT a memeber of the Order of the Phoenix?",
        choices: ["Cornelius Fudge", " Mad-Eye Moody", " Professor Snape", " Remus Lupin"],
        correctAnswer: "Cornelius Fudge"
    },{
        question: "8. Who Played Ron Weasley in the Movies?",
        choices: ["Kieran Culkin", " Rupert Grint", " Tyler Hoechlin", " Daniel Radcliffe"],
        correctAnswer: "Rupert Grint"
    },{
        question: "9. What does O.W.L. stand for?",
        choices: ["Ordinary Wizarding Level", " Official Wizarding Level", " Outstanding Wizard Learning", " Outstanding Wonderful Luck"],
        correctAnswer: "Ordinary Wizarding Level"
    },{
        question: "10. A Wizard who cannot do magic is known as a:",
        choices: ["Bleaker", " Squib", " Duddle", " Wizont"],
        correctAnswer: "Squib"
    }];

});

