//ROCK PAPER SCISSORS
$(document).on("pagecreate","#rockpaperscissors",function(event){
  // alert("pagecreate event fired!")
let playerScore = 0;
let compScore = 0;
let playerPoints = $('#rps-points');
let compPoints = $('#rps-comp-points');
let reset = $('#rps-reset-button');
// const rock = document.getElementById('rock');
// const paper = document.getElementById('paper');
// const scissors = document.getElementById('scissors');

$('#rock').on("tap",function(){
    alert('test');
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
    $(playerPoints).html(playerScore);
    $(compPoints).html(compScore);
  }); 
});