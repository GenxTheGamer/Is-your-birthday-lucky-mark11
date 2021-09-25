const birthDate = document.querySelector("#birth-date"); //Date input
const luckyNum = document.querySelector("#lucky-number"); //Lucky Number input
const checkButton = document.querySelector("#check-button"); //Check Button for result.

function getSum(dob) {
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum += Number(dob.charAt(i));
  }
  return sum;
}

function valueCheck(dob) {
  dob = dob.value;
  dob = dob.replaceAll("-", "");
  return dob;
}

function checkLucky(sumOfDate, luckyNumValue) {
  if (sumOfDate % luckyNumValue === 0) {
    return "You are lucky :D";
  } else {
    return "you are unlucky , sadge";
  }
}

function checkEventListener() {
  const luckyNumValue = luckyNum.value;
  const valueOfDate = valueCheck(birthDate);
  console.log(valueOfDate);

  const sumOfDate = getSum(valueOfDate);
  console.log(sumOfDate);

  const checkOfLucky = checkLucky(sumOfDate, luckyNumValue);
  console.log(checkOfLucky);
}

checkButton.addEventListener("click", () => checkEventListener());
