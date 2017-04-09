//POKEMON BATTLE
$(document).on("pagecreate","#pokemon-gameplay",function(event){

//location.reload() refreshes a page
  $('.resetPokemon').click(function() {
    location.reload();
  });
});

//WHACK A MOLE
$(document).on("pagecreate","#whackamole",function(event){
let score = 0;
let points = document.getElementById('points');
const reset = document.getElementById('mole-reset');

$('.mole').on("tap",function(){
	score++;
	points.innerHTML = score;
});

$(reset).on("tap",function(){
	score = 0;
	points.innerHTML = score;
});

});
	



//ROCK PAPER SCISSORS
$(document).on("pagecreate","#rockpaperscissors",function(event){
  // alert("pagecreate event fired!")
  let playerScore = 0;
  let compScore = 0;
  let playerPoints = $('#rps-points');
  let compPoints = $('#rps-comp-points');
  let reset = $('#rps-reset-button');
  let resultText = $('#resultText');


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
	let computerChoose = getComputerChoice();
	if (computerChoose === "rock") {
		$(resultText).text("You played Paper. Computer played Rock. You win!");
		playerScore++;
		$(playerPoints).text(playerScore);
	}

	else if (computerChoose === "scissors") {
		$(resultText).text("You played Paper. Computer played Scissors. Computer wins!");
		compScore++;
		$(compPoints).text(compScore);
	}

	else {
		$(resultText).text("You played Paper. Computer played Paper. It's a tie!");
	}

}); 

$('#scissors').on("tap",function(){
let computerChoose = getComputerChoice();
	if (computerChoose === "paper") {
		$(resultText).text("You played Scissors. Computer played Paper. You win!");
		playerScore++;
		$(playerPoints).text(playerScore);
	}

	else if (computerChoose === "rock") {
		$(resultText).text("You played Scissors. Computer played Rock. Computer wins!");
		compScore++;
		$(compPoints).text(compScore);
	}

	else {
		$(resultText).text("You played Scissors. Computer played Scissors. It's a tie!");
	}
}); 

$(reset).on("tap",function(){
	playerScore = 0;
	compScore = 0;
	$(playerPoints).text(playerScore);
	$(compPoints).text(compScore);
}); 
});