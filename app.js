'use strict';

var interaction1 = prompt( 'Do I watch football?').toLowerCase();
/*answer = n*/
 if (interaction1 === 'yes' || interaction1 === 'y') {
   alert(' Wrong answer yo!');
 }else if (interaction1 === 'no' || interaction1 === 'n'){
    alert('You are correct, you know me so well ;) ');
} else {
   alert('It is a yes or no response there ace.');
}

var interaction2 = prompt(' Have I been to Indonesia? ').toLowerCase();
/*answer = yes*/
 if (interaction2 === 'yes' || interaction2 === 'y') {
  alert('I have indeed! Twice actually.');
} else if (interaction2 === 'no' || interaction2 === 'n'){
  alert(' Guess again sucka! ');
} else {
  alert('Really again? It is still a yes or no answer');
}

var interaction3 = prompt('When I was 10 did I fall 3 stories into a pile of leaves?').toLowercase();
/*answer = no*/
 if (interaction3 === 'yes' || interaction3 === 'y') {
   alert('Hell no that would hurt! Pay me  $100');
 } else if (interaction3 === 'no' || interaction3 === 'n') {
   alert('You are correct! ');
 } else {
   prompt('It is still a yes or no answer......');
 }
  var interaction4 = prompt('Have I ever played connect four with a bartender in Thailand?').toLowercase();
  /* answer = yes*/
  if (interaction4 === 'yes' || interaction4 === 'y'){
    alert('I sure have. Winner got free drinks... she won everytime');
 }  else if (interaction4 === 'no' || interaction4 === 'n'){
    alert('Seems strange but I did!');
 } else {
  alert('Please answer yes or no.');
 }
 var interaction5 = prompt(' Have I ever completed college?').toLowercase();
 /* answer = no*/
  if (interaction5 === 'yes' || interaction5 === 'y') {
    alert('No. I always ended up getting bored.');
  }else if(interaction5 === 'no' || interaction5 === 'n'){
    alert( 'Great guess. You get a participation medal!')
  } else {
alert('Answer with some form of yes or no.');
  }
