document.addEventListener("DOMContentLoaded", function() {
    const animatedBox = document.getElementById("animatedBox");
    const colorButton = document.getElementById("colorButton");
    const calculateBtn = document.getElementById("calculateBtn");
    const areaResult = document.getElementById("areaResult");

    // Function to toggle animation class
    animatedBox.addEventListener("click", function() {
        animatedBox.classList.toggle("active");
    });

    // Function to calculate area
    function calculateArea() {
        let length = parseFloat(document.getElementById("length").value);
        let width = parseFloat(document.getElementById("width").value);
        if (!isNaN(length) && !isNaN(width)) {
            let area = length * width;
            areaResult.textContent = "Area: " + area + " sq units";
        } else {
            areaResult.textContent = "Please enter valid numbers.";
        }
    }

    calculateBtn.addEventListener("click", calculateArea);
});
