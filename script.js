function checkPassword() {
    const password = document.getElementById("password").value;
    const bar = document.getElementById("bar");
    const message = document.getElementById("message");

    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (password.length === 0) {
        bar.style.width = "0%";
        message.textContent = "Start typing...";
        return;
    }

    if (score <= 2) {
        bar.style.width = "30%";
        bar.style.background = "#e74c3c";
        message.textContent = "Weak password";
        message.style.color = "#e74c3c";
    } else if (score <= 4) {
        bar.style.width = "65%";
        bar.style.background = "#f39c12";
        message.textContent = "Medium password";
        message.style.color = "#f39c12";
    } else {
        bar.style.width = "100%";
        bar.style.background = "#27ae60";
        message.textContent = "Strong password";
        message.style.color = "#27ae60";
    }
}
