//function game (){

$(document).ready(function() {
  $("body").css("background-image", "none");




//These hide all the levels at the start
$("#level2box").hide();
$("#level3box").hide();
$("#level4box").hide();
$(".badges").hide();

//LEVEL 1
var answer1= document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");

  answer1.onclick = function(){
        alert("Correct!");
        $("#points").empty();
        alert("You have earned the Medal of Wisdom.");
        $("#badge").show();
        $( "#level1box" ).fadeOut("slow");
        $( "#level2box" ).fadeIn("slow");
  }
  
  answer2.onclick = function(){
        alert("Wrong!");
    }
    
  answer3.onclick = function(){
        alert("Wrong!");
    }

//LEVEL 2

//"revert: invalid" is used to tell the draggable to move back to its original position if it's dropped in an invalid location
//"containment: parent" is used to set the parameters of the draggable area, which is the parent div element in this case
$( ".food" ).draggable({revert: "invalid", containment: "parent"});

  
    $("#rabbit").droppable({accept: ".food", drop: function(event, ui) {
        if(ui.draggable.is("#carrot")) {
          $(ui.draggable).remove();
          alert("Correct!");
          alert("You have earned the Medal of Charity.");
          $("#badge2").show();
          $( "#level2box" ).fadeOut("slow");
          $( "#level3box" ).fadeIn("slow");
        }

        else {
          alert("Wrong!")
          $('.food').draggable({revert: true});
        }  
       }  
    }); 

//LEVEL 3

$(".submit").click (function(){
var question3 = document.getElementById("textfield").value.toLowerCase();
if (question3 === "greed") {
  alert("Correct!");
  alert("You have earned the Medal of Courage.");
  $("#badge3").show();
  $( "#level3box" ).fadeOut("slow");
  $( "#level4box" ).fadeIn("slow");
  }
  
else
  {
  alert("Oops!");
  } 
});
           
                  

//LEVEL 4

$(".find").hide();
 
$("#block1").click(function(){
  $(".mushroom").toggle(); 
  alert("Nope!");
});

$("#block2").click(function(){
  $(".flower").toggle();
  alert("Yes! You found it!");
  $("#badge4").show();
  alert("You have earned the Medal of Fulfillment.");
  alert("Congratulations! You have passed the game!")
});

$("#block3").click(function(){
  $(".goomba").toggle();
  alert("Nope!");
});

$("#block4").click(function(){
  $(".greenmushroom").toggle();
  alert("Nope!");
});

 
});