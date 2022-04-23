// We need to be sure to wait for the 'DOMContentLoaded' event before calling functions
// to make sure the HTML loads before running Javascript.
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('square').addEventListener('click', function() {
        setRandomSquareColor();

        // this.style.backgroundColor = getRandomColor();
        // Alternative "better" way of doing this
        // The addEventListener function has a hidden 'this' parameter that corresponds to the element that triggered the event
    })
 });

 function setRandomSquareColor() {
    document.getElementById('square').style.backgroundColor = getRandomColor();
 }

 // To write this function I Googled: "find random value in array javascript" and created an array of colors.
 function getRandomColor() {
     const colors = [
         'blue', // 0
         'red', // 1
         'green', // 2
         'orange', // 3
         'yellow', // 4
         'purple' // 5
     ];

     // Math.random() generates a random number between 0 and 1
     // Using the length of our colors array (6) we can map that random
     // number to one of our colors.
     // Example: Math.random() -> .55 * 6 = 3.3
     const randomNumber = Math.random() * colors.length;

     // Since we can only access an array with a whole number, we need
     // round down to the nearest whole number. Math.floor(...) will
     // chop off the decimal for us.
     const randomIndex = Math.floor(randomNumber);

     // This will return one of the colors in the array
     return colors[randomIndex];
 }
