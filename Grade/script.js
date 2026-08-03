function calculateGrade() {
    var scoreInput = document.getElementById("score-input").value;
    
    if (scoreInput === "") {
        document.getElementById("grade-result").innerHTML = "Please enter a value.";
        return;
    }
    
    var score = parseFloat(scoreInput);
    
    if (isNaN(score)) {
        document.getElementById("grade-result").innerHTML = "Please enter a valid number.";
        return;
    }
    
    if (score < 0 || score > 100) {
        document.getElementById("grade-result").innerHTML = "Score must be between 0 and 100.";
        return;
    }
    
    var grade = "";
    var article = "a";
    
    if (score >= 80) {
        grade = "A";
        article = "an";
    } else if (score >= 70) {
        grade = "B";
        article = "a";
    } else if (score >= 60) {
        grade = "C";
        article = "a";
    } else if (score >= 50) {
        grade = "D";
        article = "a";
    } else {
        grade = "F";
        article = "an";
    }
    
    document.getElementById("grade-result").innerHTML = "You got " + article + " " + grade;
}
