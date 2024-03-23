//your JS code here. If required.
// Find the DOM level of an element with id "level"
document.addEventListener("DOMContentLoaded", function() {
    var element = document.getElementById("level");
    var domLevel = 0;

    while (element !== document.documentElement) {
        domLevel++;
        element = element.parentNode;
    }

    // Add 1 to include the root html element
    domLevel++;

    // Display the result
    alert("The level of the element is: " + domLevel);
});
