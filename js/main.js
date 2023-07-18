const userFirstName = prompt("Type your first name here:");
const userLastName = prompt("Type your last name here:");
const userFavColor = prompt("Type your favourite colour here:");

const generatedResult = userFirstName + userLastName + userFavColor + "21";

document.getElementById("user-info").innerHTML = generatedResult;

const backtickMessage =
  "This paragraph and the text right below it are presented to you using backtick.";

const generatedResultBT = `
<p>${backtickMessage}</p>
<h1>${generatedResult}</h1>
`;

document.getElementById("user-info-bt").innerHTML = generatedResultBT;
