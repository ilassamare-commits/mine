// Password Strength Checker
// This script analyses a password and gives a simple strength rating.

function checkPassword(password) {
    let score = 0;
    const feedback = [];

    if (password.length >= 12) {
        score++;
    } else {
        feedback.push("Use at least 12 characters.");
    }

    if (/[A-Z]/.test(password)) {
        score++;
    } else {
        feedback.push("Add an uppercase letter.");
    }

    if (/[a-z]/.test(password)) {
        score++;
    } else {
        feedback.push("Add a lowercase letter.");
    }

    if (/[0-9]/.test(password)) {
        score++;
    } else {
        feedback.push("Add a number.");
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    } else {
        feedback.push("Add a special character.");
    }

    let strength;

    if (score <= 2) {
        strength = "Weak";
    } else if (score <= 4) {
        strength = "Medium";
    } else {
        strength = "Strong";
    }

    return {
        strength: strength,
        score: score,
        feedback: feedback
    };
}

// Example
const result = checkPassword("ExamplePassword123!");

console.log("Password strength:", result.strength);
console.log("Score:", result.score + "/5");

if (result.feedback.length > 0) {
    console.log("Suggestions:");
    result.feedback.forEach(function (item) {
        console.log("- " + item);
    });
}
