randomNameP1 = ['Zoe', 'Anna', 'Georgia', 'Lily', 'Ella', 'Abi', 'Dayna', 'Samantha', 'Xanthe'];
let pickedRandomNameP1 = randomNameP1[Math.floor(Math.random() * 9 + 0)];

let definedNameP1 = prompt ('Player1 enter your name');
console.log(definedNameP1);

if (definedNameP1 == ''){
  console.log('Welcome ' + pickedRandomNameP1 + ' to the Number Guessing Game!')

}else{
  console.log('Welcome ' + definedNameP1 + ' to the Number Guessing Game')
}
randomNameP2 = ['Zoe', 'Anna', 'Georgia', 'Lily', 'Ella', 'Abi', 'Dayna', 'Samantha', 'Xanthe'];
let pickedRandomNameP2 = randomNameP2[Math.floor(Math.random() * 9 + 0)];

let definedNameP2 = prompt ('Player2 enter your name');
console.log(definedNameP2);

  if (definedNameP2 == ''){
  console.log('Welcome ' + pickedRandomNameP2 + ' to the Number Guessing Game!')
  }else{
  console.log('Welcome ' + definedNameP2 + ' to the Number Guessing Game')
}
  let round = 1;
  let pointPlayer1 = 0;
  let pointPlayer2 = 0;
  
play();
function play() {
  random = Math.floor(Math.random() * 20 + 1);
do{
guessPlayer1 = prompt(definedNameP1 + ' enter a number from 1-20');

if (guessPlayer1 > random) {
console.log('Enter a smaller number');

} else if (guessPlayer1 < random) {
console.log('Enter a bigger number');

} else {
console.log('You got it correct');
pointPlayer1++
console.log(definedNameP1 + "'s Current point is " + pointPlayer1);
break;
}

round++

guessPlayer2 = prompt(definedNameP2 + ' enter your guess:')

if (guessPlayer2 > random) {
console.log('Enter a smaller number');

} else if (guessPlayer2 < random) {
console.log('Enter a bigger number');

} else {
console.log('You got it correct');

pointPlayer2++

console.log(definedNameP2 +"'s Current point is " + pointPlayer2);
break;
}
round++

}while(round <= 6){
}
again = prompt('Do you want to play again?');
if (again == 'yes') {
play();
} else {
console.log(definedNameP1 + "'s final point is " + pointPlayer1)
console.log(definedNameP2 + "'s final point is " + pointPlayer2)
console.log('Game Over');
}
}