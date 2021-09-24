const birthDate = document.querySelector("#birth-date");
const luckyNum = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");

function checkEventListener() {
  const birthDateValue = birthDate.value;
  const luckyNumValue = luckyNum.value;
  console.log("values", birthDateValue, luckyNumValue);
}

checkButton.addEventListener("click", () => checkEventListener());
