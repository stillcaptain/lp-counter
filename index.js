let scores = {
    home: 4000,
    guest: 4000,
  };
  
function subtractScore(player, points) {
    let targetScore = scores[player] - points;
    let currentScore = scores[player];
  
    // Define the speed and increment for the animation
    const animationSpeed = 15; // speed of the animation (milliseconds)
    const increment = 10; // decrement in steps of 10 points
  
    // Use setInterval to animate the score change
    let interval = setInterval(function() {
      // Check if we're still above the target score, and update the score in increments
      if (currentScore > targetScore) {
        currentScore = currentScore - increment;
        if (currentScore < targetScore) {
          currentScore = targetScore; // Ensure the score doesn't go below target
        }
      }
      else {
        // If we reach or go below the target, clear the interval and update the final score
        clearInterval(interval);
        currentScore = targetScore;
      }
  
      // Update the display on the page
      document.getElementById(`${player}-score`).textContent = currentScore;
    }, animationSpeed);
  
    // Update the actual score in the scores object
    scores[player] = targetScore;
  }
  
  function addScore(player, points) {
    let targetScore = scores[player] + points;
    let currentScore = scores[player];
  
    // Define the speed and increment for the animation
    const animationSpeed = 7; // speed of the animation (milliseconds)
    const increment = 20; // decrement in steps of 10 points
  
    // Use setInterval to animate the score change
    let interval = setInterval(function() {
      // Check if we're still above the target score, and update the score in increments
      if (currentScore < targetScore) {
        currentScore = currentScore + increment;
        if (currentScore > targetScore) {
          currentScore = targetScore; // Ensure the score doesn't go below target
        }
      }
      else {
        // If we reach or go below the target, clear the interval and update the final score
        clearInterval(interval);
        currentScore = targetScore;
      }
  
      // Update the display on the page
      document.getElementById(`${player}-score`).textContent = currentScore;
    }, animationSpeed);
  
    // Update the actual score in the scores object
    scores[player] = targetScore;
  }
  
  function restartGame() {
    // Reset the scores instantly, without animation
    scores.home = 4000;
    scores.guest = 4000;
    document.getElementById('home-score').textContent = scores.home;
    document.getElementById('guest-score').textContent = scores.guest;
  }