$(document).ready(function() {

  var score = 0;

  //These hide all the levels at the start
  $("#level2box").hide();
  $("#level3box").hide();
  $("#level4box").hide();
  $("#level5box").hide();
  $("#completeBox").hide();

  //LEVEL 1
  var answer1 = document.getElementById("answer1");
  var answer2 = document.getElementById("answer2");
  var answer3 = document.getElementById("answer3");

  answer1.onclick = function() {
    alert("Correct!");
    score++;
    document.getElementById("points").innerHTML = score;
    $("#level1box").fadeOut("slow");
    $("#level2box").fadeIn("slow");
  }

  answer2.onclick = function() {
    alert("Wrong!");
  }

  answer3.onclick = function() {
    alert("Wrong!");
  }

  //LEVEL 2
  var answer4 = document.getElementById("answer4");
  var answer5 = document.getElementById("answer5");
  var answer6 = document.getElementById("answer6");

  answer4.onclick = function() {
   alert("Wrong!");
  }

  answer5.onclick = function() {
     alert("Correct!");
    score++;
    document.getElementById("points").innerHTML = score;
    $("#level2box").fadeOut("slow");
    $("#level3box").fadeIn("slow");
  }

  answer6.onclick = function() {
    alert("Wrong!");
  }

  //LEVEL 3

  var answer7 = document.getElementById("answer7");
  var answer8 = document.getElementById("answer8");
  var answer9 = document.getElementById("answer9");

  answer7.onclick = function() {
    alert("Wrong!");
  }

  answer8.onclick = function() {
    alert("Wrong!");
  }

  answer9.onclick = function() {
     alert("Correct!");
    score++;
    document.getElementById("points").innerHTML = score;
    $("#level3box").fadeOut("slow");
    $("#level4box").fadeIn("slow");
  }

  //LEVEL 4
  var answer10 = document.getElementById("answer10");
  var answer11 = document.getElementById("answer11");
  var answer12 = document.getElementById("answer12");

  answer10.onclick = function() {
    alert("Wrong!");
  }

  answer11.onclick = function() {
    alert("Correct!");
    score++;
    document.getElementById("points").innerHTML = score;
    $("#level4box").fadeOut("slow");
    $("#level5box").fadeIn("slow");
  }

  answer12.onclick = function() {
    alert("Wrong!");
  }

  //LEVEL 5
  var answer13 = document.getElementById("answer13");
  var answer14 = document.getElementById("answer14");
  var answer15 = document.getElementById("answer15");

  answer13.onclick = function() {
    alert("Correct!");
    score++;
    document.getElementById("points").innerHTML = score;
    $("#level5box").fadeOut("slow");
    $("#completeBox").fadeIn("slow");
  }

  answer14.onclick = function() {
    alert("Wrong!");
  }

  answer15.onclick = function() {
    alert("Wrong!");
  }

});