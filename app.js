'use strict';
/* Design a guessing game about you that involves FIVE yes/no responses. Be creative
and fun and whimsical. Or not. It's up to you! It's your project!
The responses in the guessing game must require a mix of yes/no answers,
and user input must accept either y/n or yes/no responses, with either
.toUpperCase() or .toLowerCase() used to validate the user input
and accommodate users entering all-caps Y/N or YES/NO answers, too.
Useful and descriptive console.log() messages in the JS are well written
 and correctly displaying to the browser console for each response of the guessing game.
var response1 = prompt ("Do I watch sports?")*/
var interaction1 = prompt( 'Do I watch football?').toLowerCase();
 if (interaction1 === 'yes' || interaction1 === 'y') {
   alert(' Wrong answer yo!');
 }else if (interaction1 === 'no' || interaction1 === 'n'){
    alert('You are correct, you know me so well ;) ');
} else {
   alert('It is a yes or no response there ace.');
}

var interaction2 = prompt(' Have I been to Indonesia? ').toLowerCase();
 if (interaction2 === 'yes' || interaction2 === 'y') {
  alert('I have indeed! Twice actually.');
} else if (interaction2 === 'no' || interaction2 === 'n'){
  alert(' Guess again sucka! ');
} else {
   alert('Really again? It is still a yes or no answer');
}

var interaction3 = prompt('When I was 10 did I fell 3 stories into a pile of leaves?');
 if (interaction3 === 'yes' || interaction3 === 'y') {
   alert('Hell no that would hurt! Pay me  $100');
 }
 else if (interaction3 === 'no' || interaction3 === 'n') {
   alert('You are correct! ');
 }
 else {
   prompt('It is still a yes or no answer......');
 }
