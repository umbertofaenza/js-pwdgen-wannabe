const userFirstName = prompt("Type your first name here:");
const userLastName = prompt("Type your last name here:");
const userFavColor = prompt("Type your favourite colour here:");

const generatedResult = userFirstName + userLastName + userFavColor + "21";

document.getElementById("user-info").innerHTML = generatedResult;
