function game(name) {
    
    var name = prompt("what is your name?");
    alert("hello " + name);
    
  confirm("I am ready to play!");
var age = prompt("What is your age?");

if (age < 13) { 
    alert("You're a tad young, tread carefully.");
}

else { 
    alert("Great! Let's go!");
}

alert("You're walking alone in a forest, lost and confused, when suddenly you come across a fork in the road.");

var userAnswer = prompt("Both paths look the same, which do you take? <left or right>");

if (userAnswer === "left") {
    alert("You take the left path, and emerge into a familiar path leading back to your camp site. Phew! Safe and sound.");
}

else {
    alert("You choose the path on the right, which leads to a monster lair. Before you can run, Big Foot emerges and eats you. Oh no! You died. :( ");
}

var feedback = prompt('Did you like my game? Please help me rate it! 1 being the lowest, 10 being the highest');

if (feedback > 8) {
    alert("Thank you!");
}

else {
    alert("I'll keep practicing coding.");
}
}