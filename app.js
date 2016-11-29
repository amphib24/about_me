'use strict';
/* Design a guessing game about you that involves FIVE yes/no questions. Be creative
and fun and whimsical. Or not. It's up to you! It's your project!
The questions in the guessing game must require a mix of yes/no answers,
and user input must accept either y/n or yes/no responses, with either
.toUpperCase() or .toLowerCase() used to validate the user input
and accommodate users entering all-caps Y/N or YES/NO answers, too.
Useful and descriptive console.log() messages in the JS are well written
 and correctly displaying to the browser console for each question of the guessing game.
var question1 = prompt ("Do I watch sports?")*/
var question1 = prompt( 'Do I watch football?').toLowerCase();
 if (question1 === 'yes' || question1 === 'y') {
   alert(' Wrong answer yo!');
   else if (question1 === 'no' || question1 === 'n'){
    alert('You are correct, you know me so well ;) ');
}

} else {
}   alert('It is a yes or no question there ace.');

var question2 = prompt(' Have I been to Indonesia? ').toLowerCase();
if (question2 === 'yes' || question2 === 'y') {
  alert('I have indeed! Twice actually.');

} else {
  alert(' Guess again sucka! ');
}
