function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


function printAppScreen(htmlString) {
  let appElem = document.querySelector('#app');
  appElem.innerHTML = htmlString;
}


function printGuessScreen(title, message){
printAppScreen(`
<h1 class="display-1">${title}<ht>
<p class ="lead">${message}</p>
<form class="mt-4 w-50 mx-auto" id="guess-form">
  div class="col-xs-12 col-sm">
  <input type="number" class="form-control" name="guess" id="guess" placeholder = "Your guess goes here ...." required min="1" max="10">
  </div>
  <div class="col-xs-12 col-sm-4">
  <button type="submit" class="btn btn-primary w-100">Guess</buttoon>
  </div>
  </div>
  </form>
  `);

  let quessForm = document.querySelector('#guess-form');

  guessForm.addEventListener('submit', makeGuess);

}

function printResultScreen(title, message) {
  printAppScreen(`
  <h1 class="display-1">${title}</h1>
    <p class="lead">${message}</p>
    <utton class= btn btn-primary btn-lg" role="button" id="again">play Again!</button>
  `);
  let againButton = document.querySelector('#again');
  againButton.addEventListener('clic', startGame);
}





function guessingGame(){

    // Create a number to guess between 0 and 10
  let numberToGuess = getRandomIntInclusive(1, 10); // 10

  // Initialize a counter
  let count = 1;

  // Make your fist guess
  let guess = parseInt(document.getElementById('input1').value);
  let containerElem = document.querySelector('#result1');
 // As long as the guess is incorrect or you have tried to guess less than 3 times, try to guess again
  // while(guess !== numberToGuess &&  count < 3){
    if(isNaN(guess)){
     return containerElem.innerHTML="What the hell do you think you're doing?!?!!! I asked for a number!"
     }

     else if(guess !== numberToGuess){

        if(count > 3){
          containerElem.innerHTML= `Sorry human, but you couldn't guess the number in less than three times. The number was ${numberToGuess}`;
        }
        else{
        containerElem.innerHTML=`Wrong!!! Try Again! You have ${3 - count} attempts left`;

        }

        count +=1;
     }
    //    else {
    //   // Try to guess a number
    //  return containerElem.innerHTML=`Wrong!!! Try Again! You have ${3 - count} attempts left`;

    //   // Count the guess
    //   count++;
    //  }
  // }

  // If you guessed within 3 attempts...
  else{
    // ... print the success message
    return containerElem.innerHTML=  `Success: the number is indeed ${numberToGuess}. You got the number correctly after ${count} attempts.`;
  }
}

// function writeResult(string){
//   document.getElementById('result1').innerText = string;
// }
  // This is the better way to do it, however it's still not the most ideal way, I'll explain after the vacation.
  //  document.getElementById('play').onclick = () => writeResult(guessingGame())


  // function printScreen(htmlString){
  //   let containerElem = document.querySelector('#result1');

  //   containerElem.innerHTML = htmlString;
  // }

  // printScreen(`<button id="changeScreen">Change</button>`);

  // let buttonElem = document.querySelector('#play');

  // buttonElem.addEventListener('click', event => {
  //   event.preventDefault();

  //  return printScreen(guessingGame());
  // });
