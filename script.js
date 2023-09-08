<script>
    // Default target date (3 years from the current date)
    var targetDate = new Date();
    targetDate.setFullYear(targetDate.getFullYear() + 3);

    // Update the countdown every second
    var countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        if (distance <= 0) {
            // If the countdown is over, display a message
            document.getElementById("countdown").innerHTML = "Countdown is over!";
            clearInterval(countdownInterval); // Stop the countdown interval
        } else {
            // Calculate days, hours, minutes, and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Check if the countdown is at 1095 days, 59 minutes, and 57 seconds
            if (days === 1095 && hours === 23 && minutes === 59 && seconds === 57) {
                // Apply the "hacker effect" by changing the background color and text
                document.body.style.backgroundColor = "#000"; // Black background
                document.getElementById("countdown").innerHTML = "Rifa will live as long she wants";
                document.getElementById("countdown").style.fontSize = "36px"; // Reduce font size
                document.getElementById("countdown").style.color = "#0F0"; // Green text
                document.getElementById("countdown").style.textShadow = "none"; // Remove text shadow
                buzzEffect(); // Call the buzz effect function
            } else {
                // Display the regular countdown
                document.body.style.backgroundColor = "#F4C2C2"; // Reset background color
                document.getElementById("countdown").style.fontSize = "48px"; // Reset font size
                document.getElementById("countdown").style.color = "#FF00FF"; // Reset text color
                document.getElementById("countdown").style.textShadow = "0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF"; // Reset text shadow
                document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
            }
        }
    }

    function setCustomDate() {
        var dateInputValue = document.getElementById("dateInput").value;
        if (dateInputValue) {
            targetDate = new Date(dateInputValue);
            var currentDate = new Date().getTime();
            if (targetDate.getTime() <= currentDate) {
                alert("Please select a future date.");
            } else {
                clearInterval(countdownInterval);
                countdownInterval = setInterval(updateCountdown, 1000);
                updateCountdown();
            }
        } else {
            alert("Please enter a valid date.");
        }
    }

    function buzzEffect() {
        // You can implement your own "hacker effect" here, such as flashing the screen or adding audio effects.
        // For example, you can change the background color rapidly to create a flashing effect.
        var isFlashing = false;
        var flashInterval = setInterval(function () {
            if (isFlashing) {
                document.body.style.backgroundColor = "#000"; // Black background
            } else {
                document.body.style.backgroundColor = "#F00"; // Red background
            }
            isFlashing = !isFlashing;
        }, 100); // Change color every 100 milliseconds

        // Stop the flashing after a few seconds (adjust the time as needed)
        setTimeout(function () {
            clearInterval(flashInterval);
            document.body.style.backgroundColor = "#000"; // Reset to black background
        }, 5000); // Stop flashing after 5 seconds
    }

    // Initial call to update the countdown immediately when the page loads
    updateCountdown();
</script>
