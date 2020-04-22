import { Question } from './flashCards.js';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



function displayTimer(question){
    setInterval(() => {
    $("#timer").html(question.score);
   //console.log(`here is our answer ${question.response} and here is the user input ${$("#answer").val()} and here is our time ${question.time}`);
    $("#result").html(question.response);
},1000);
}



$(document).ready(function() {
    let question1 = new Question();
    $("#start-quiz").click(function(){
        $("#question").html(question1.askQuestion());
        question1.setScore();
        question1.setVerification();
        displayTimer(question1);
    })
    $("form#uenter").submit(function(event){
        event.preventDefault();
        var myAnswer = $("#answer").val();
        console.log (`am i being defined ${myAnswer}`)
        question1.answer = myAnswer;
    });   
});








