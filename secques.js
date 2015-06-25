var securityQuestions = [
{question : "mother's maiden name", expectedAnswer : "javascript"},
{question : "first pet's name", expectedAnswer : "octocat"},
{question : "last school", expectedAnswer : "General Assembly"},
]
for (i = 0; i < 3; i++) {
    questions = prompt("Enter your " + securityQuestions[i].question);
    if (questions !== securityQuestions[i].expectedAnswer){
        alert("Wrong answer!")
        break
    } 
}