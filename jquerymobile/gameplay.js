// $(document).ready(function() {


//ROCK PAPER SCISSORS
$(document).on("pagecreate","#rockpaperscissors",function(event){
  // alert("pagecreate event fired!")

let playerScore = document.getElementById('rps-points');
let compScore = document.getElementById('rps-comp-points');
let reset = document.getElementById('rps-reset-button');
// const rock = document.getElementById('rock');
// const paper = document.getElementById('paper');
// const scissors = document.getElementById('scissors');

$('#rock').on("tap",function(){
    alert('test');
  }); 

// rock.addEventListener('click', function(){
// alert('test');
// });

});




// });//closing for doc.ready