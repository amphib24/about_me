'use strict';
var correctResponse = 0;
var alertUser = alert('You are about to embark on a journey of getting to know random facts about me, Jeff.');
alert('These are yes or no answers so please answer by entering yes, no, n, or y. ENJOY the Journey! ');
var interaction1 = prompt( 'Do I watch football?').toLowerCase();
/*answer = n*/
 if (interaction1 === 'yes' || interaction1 === 'y') {
   alert(' Wrong answer yo!');
 }else if (interaction1 === 'no' || interaction1 === 'n'){
    alert('You are correct, you know me so well ;) ');
    correctResponse++;
} else {
   alert('It is a yes or no response there ace.');
}
console.log('The user answered' + ' ' + interaction1 + ' ' + 'to the first interaction');
/* space between variables*/

var interaction2 = prompt(' Have I been to Indonesia? ').toLowerCase();
/*answer = yes*/
 if (interaction2 === 'yes' || interaction2 === 'y') {
  alert('I have indeed! Twice actually.');
  correctResponse++;
} else if (interaction2 === 'no' || interaction2 === 'n'){
  alert(' Guess again sucka! ');
} else {
  alert('Really again? It is still a yes or no answer');
}
console.log('The user answered' + ' ' + interaction2 + ' ' + 'to the second interaction');
/*space between variables*/

var interaction3 = prompt('When I was 10 did I fall 3 stories into a pile of leaves?').toLowerCase();
/*answer = no*/
 if (interaction3 === 'yes' || interaction3 === 'y') {
   alert('Hell no that would hurt! Pay me  $100');
 } else if (interaction3 === 'no' || interaction3 === 'n') {
   alert('You are correct! ');
   correctResponse++;
 } else {
   prompt('It is still a yes or no answer......');
 }
 console.log('The user answered' + ' ' + interaction3 + ' ' + 'to the third interaction');
 /* space between variables*/

  var interaction4 = prompt('Have I ever played connect four with a bartender in Thailand?').toLowerCase();
  /* answer = yes*/
  if (interaction4 === 'yes' || interaction4 === 'y'){
    alert('I sure have. Winner got free drinks... she won everytime');
    correctResponse++;
 }  else if (interaction4 === 'no' || interaction4 === 'n'){
    alert('Seems strange but I did!');
 } else {
  alert('Please answer yes or no.');
 }
 console.log('The user answered' + ' ' + interaction4 + ' ' + 'to the fourth interaction');
 /* space between variables*/

 var interaction5 = prompt(' Have I ever completed college?').toLowerCase();
 /* answer = no*/
  if (interaction5 === 'yes' || interaction5 === 'y') {
    alert('No. I always ended up getting bored.');
  }else if(interaction5 === 'no' || interaction5 === 'n'){
    alert( 'Great guess. You get a participation medal!')
    correctResponse++;
  } else {
alert('Answer with some form of yes or no.');
  }
  console.log('The user answered' + ' ' + interaction5 + ' ' + 'to the fifth interaction');
/* space between variable*/
var myNumber = 72;
for ( var i = 0; i < 4; i++) {
  var guess = parseInt( prompt('Please guess a number between 1 and 80! '));
  if (guess < myNumber) {
    alert('Sorry but that is too low! Please try again');
  }
  if (guess > myNumber) {
    alert('doink!!! Too high. Please try again. ');
  }
  if (guess === myNumber) {
    alert('Great guess! You get a participation medal! ')
    i=4;
    correctResponse++;
  }
  if ( i === 3) {
   alert('Me so sorry but you are out of guesses. Feel free to refresh the page and try again. ');
  }
}
console.log('User finished guessing game.');
/*space between questions*/

var maxAttempts = 6
var countriesVisited =
 ['Indonesia','Phillipines','Singapore','Japan','Thailand'];
var correctAnswer = false;
  while (maxAttempts > 0){
    var interaction7 = prompt('Can you guess one country I have been to? ');
  for (var i = 0; i < countriesVisited.length; i++){
    var country = countriesVisited[i];
    if (interaction7 === country){
    alert('Great Job!');
    correctAnswer = true;
    correctResponse++;
    break;
      }
  }
  maxAttempts -= 1;
   if (maxAttempts === 0){
    alert('Sorry guesses are up. The answers were Indonesia, Phillipines, Singapore, Japan, and Thailand');
     }
  if (correctAnswer === true){
  break;
    }
}
  /*closing alert*/
var closingStatement = alert('MIND BLOWN! You got ' + correctResponse + ' out of 7. Thanks for taking time to play. Please take sometime to read through my page to learn more about my professinal goals and history. ');
