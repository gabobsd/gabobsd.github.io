$(document).on("pagecreate", "#game", function(event) {
  	var player1HP = 100;
  	var player2HP = 100;
  	
    $("#player1button").on("tap", function() {
        player2HP--;
      	$("#player2Bar").val(player2HP);
      	$("#player2HPText").text(player2HP);
    });

    $("#player2button").on("tap", function() {
        player1HP--;
      	$("#player1Bar").val(player1HP);
      	$("#player1HPText").text(player1HP);
    });
});