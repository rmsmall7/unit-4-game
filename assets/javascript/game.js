// in this java script the process flow I want to follow is:
//establish variables for each gem, score, target number, wins, loss, gem buttons
//Preparing the start of the game and reset after each game
//create the random number for each gem
//reset your total score to 0
//create new random number 
//increase wins or loss as needed
//create an on-click event for the gems
//be sure each gem works independently of each other 
//each gem needs to have a unique random number
// alert the user if the win or lose
// restart the game after alert-  the wins or losses will increase


// list of variables that wil be used in this game.
var targetNumber = "";
var blueBtn;
var orangeBtn;
var pinkBtn;
var purpleBtn;
var score;
var wins = 0;
var loss = 0;

// using jQuery document ready to ensure the whole page loads correctly.  I tested this with and with document.ready-  without this your total score did not load so I decided to leave this in.  I referenced https://learn.jquery.com/using-jquery-core/document-ready/ to get more details on how document.ready works.
$(document).ready(function () {

    // once the funciton starts -  I need a random number to match to.  I used https://www.w3schools.com/js/js_random.asp as a reference to create the random number below. 
    function begin() {
        //I want the random number to be between 1 and 120.  That is why I used *120 and +1
        targetNumber = Math.floor(Math.random() * 120) + 1;
        // resets your total score back to 0
        score = 0;

        //this is used to identify the gems on the page and to create a random number.  I used the variables created at the begin
        var crystal = [$(".blue"), $(".orange"), $(".pink"), $(".purple")];
        var button = [blueBtn, orangeBtn, pinkBtn, purpleBtn];

        // since the buttons are identified above this will now add a random number to each. I am using a for loop to do this.  This loop will calculate the number of items in the crystal and button array above and generate a number for each.  Instead of using "i" as the example on https://www.w3schools.com/js/js_loop_for.asp I used "g".  I just did this to test to see if worked with a different letter
        //used jQuery .attr to set the value for the gems since the have matching elements.  I used https://www.w3schools.com/jquery/html_attr.asp for this.

        for (var g = 0; g < crystal.length; g++) {
            button[g] = crystal[g].attr("numberCheck", Math.floor(Math.random() * 12) + 1);
        };
        // this will display the wins, loss, score and target number to the user.  I followed the same process as week 3 homework assignment by using document.getElementById.  I found examples and details about this process at https://www.w3schools.com/js/js_output.asp
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("loss").innerHTML = loss;
        document.getElementById("score").innerHTML = score;
        document.getElementById("ntg").innerHTML = targetNumber;
    }
    begin();

    //creating an on-click event for the gems.  I want the gems to be the only items in the document that has a click event. To isolate the gems I added .crystal.  I used the examples on https://www.w3schools.com/js/js_functions.asp.  
    //Needed to ensure the gems were returning a whole number and not a decimal so I used parseInt for this.  https://www.w3schools.com/jsref/jsref_parseint.asp
    //created an if and else if statement to check the users total to the number to guess.
    //return message for win or lost
    $(".crystal").on("click", function () {
        score += parseInt($(this).attr("numberCheck"));
        //I added this because the users total score will not display without it.  I am researching why as I have this listed above too.  for now it works so I will leave it but need to understand this more.
        document.getElementById("score").innerHTML = score;
        
        // if the users total score and target number match - the user will see an alert stating they won, the wins number will increase by 1 and the function "begin" will run again reseting the game
        //I reviewed https://www.w3schools.com/js/js_if_else.asp to get the if's and elseif statements to work for this assignment
        if (score == targetNumber) {
            wins++;
            alert("You Won!!");
            begin();
        } 
        
        // this else if will run if the users total score is greater than the target number.  The user will get a prompt that they lost, the losses will increase by 1 and the function "begin" will run to reset the game
        else if (score > targetNumber) {
            loss++;
            alert("You Lost!")
            begin();
        }
    });
});