//ROCK PAPER SCISSORS
$(document).on("pagecreate","#rockpaperscissors",function(event){
  // alert("pagecreate event fired!")
let playerScore = 0;
let compScore = 0;
let playerPoints = $('#rps-points');
let compPoints = $('#rps-comp-points');
let reset = $('#rps-reset-button');
// let resultText = $('#resultText');
// const rock = document.getElementById('rock');
// const paper = document.getElementById('paper');
// const scissors = document.getElementById('scissors');

//Randomize computer choices
function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}


$('#rock').on("tap",function(){
  let computerChoose = getComputerChoice();
  if (computerChoose === "scissors") {
    $(resultText).text("You played Rock. Computer played Scissors. You win!");
    playerScore++;
    $(playerPoints).text(playerScore);
  }

  else if (computerChoose === "paper") {
    $(resultText).text("You played Rock. Computer played Paper. Computer wins!");
    compScore++;
    $(compPoints).text(compScore);
  }

  else {
  	 $(resultText).text("You played Rock. Computer played Rock. It's a tie!");
  }

  }); 

$('#paper').on("tap",function(){
    alert('test');
  }); 

$('#scissors').on("tap",function(){
    alert('test');
  }); 

$(reset).on("tap",function(){
    alert('test');
    playerScore = 0;
    compScore = 0;
    $(playerPoints).text(playerScore);
    $(compPoints).text(compScore);
  }); 
});