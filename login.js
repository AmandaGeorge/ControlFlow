var userLogin = {username : "Bob", pw : "IloveBob"};
var pwAttempt = prompt("Please enter the password for: " + userLogin.username);
for (i = 0; i <= 2; i++) {
    if (userLogin.pw === pwAttempt) {
        console.log("You're in!");
    }
    else if (userLogin.pw !== pwAttempt) {
        console.log("Incorrect password. Please try again.");
        if ((i === 2) && (userLogin.pw !== pwAttempt)) {
            console.log("Incorrect password. You have no more attempts.");
        }
        else {
            pwAttempt = prompt("Please enter the password for: " + userLogin.username);
        }
    }
}