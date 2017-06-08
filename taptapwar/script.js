$(document).on("pagecreate", "#game", function(event) {

    //vars for player 1 and player 2 HP
    var player1HP = 100;
    var player2HP = 100;
  	//sound works in browser, but not on phone :( - still gotta figure this one out
  	var finishSound = new Audio('http://www.orangefreesounds.com/wp-content/uploads/2014/10/Button-sound-wrong.mp3?_=1');

    //jquery mobile tap event - when player 1 taps their button, player 2 HP goes down
    $("#player1button").on("tap", function() {
        player2HP-=10;
        $("#player2Bar").val(player2HP);
        $("#player2HPText").text(player2HP);
      	gameCheck();	
    });

    //jquery mobile tap event - when player 2 taps their button, player 1 HP goes down
    $("#player2button").on("tap", function() {
        player1HP-=10;
        $("#player1Bar").val(player1HP);
        $("#player1HPText").text(player1HP);
      	gameCheck();
    });

    //function to check if player HP reaches 0 - buttons are disabled when 0 is reached, and text changes to say who won/lost
    function gameCheck() {
        if (player1HP <= 0) {
          	finishSound.play();
			$('#player1Status').text('YOU LOSE!');
          	$('#player2Status').text('YOU WIN!');
          	$('#player1button').prop('disabled', true);
          	$('#player2button').prop('disabled', true);
        } else if (player2HP <= 0) {
			finishSound.play();
			$('#player1Status').text('YOU WIN!');
          	$('#player2Status').text('YOU LOSE!');
          	$('#player1button').prop('disabled', true);
          	$('#player2button').prop('disabled', true);
        }
    }

    //reset game - HP text and bars go back to 100, buttons are enabled again
     $("#resetButton").on("tap", function() {
        player1HP = 100;
        player2HP = 100;
       	$('#player1Status').text('Player 1 HP');
        $('#player2Status').text('Player 2 HP');
        $("#player1Bar").val(player1HP);
        $("#player1HPText").text(player1HP);
        $("#player2Bar").val(player2HP);
        $("#player2HPText").text(player2HP);
       	$('#player1button').prop('disabled', false);
        $('#player2button').prop('disabled', false);
    });

// 	function reset() {
//         player1HP = 100;
//         player2HP = 100;
//         $("#player1Bar").val(player1HP);
//         $("#player1HPText").text(player1HP);
//         $("#player2Bar").val(player2HP);
//         $("#player2HPText").text(player2HP);
//     }

});