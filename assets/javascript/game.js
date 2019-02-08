
    //This is where I am setting the variable for the random number
    var targetNumber = Math.floor(Math.random() * 50) + 1;
    console.log(targetNumber);

    //matching the random number to the target number
    $("#number-to-guess").text(targetNumber);

    var counter = 0;

    var numberOptions = [10, 11, 7,3,2];
    var increment = numberOptions[Math.round(Math.random())];

    $(".blueGem").on("click", function () {
      counter += increment;

      alert("New score: " + counter);

      if (counter === targetNumber) {
        alert("You Win!");
      }

      else if (counter >= targetNumber) {
        alert("You Lose!!");
      }

    });







  