const birthDate = document.querySelector("#birth-date"); //Date input
const luckyNum = document.querySelector("#lucky-number"); //Lucky Number input
const checkButton = document.querySelector("#check-button"); //Check Button for result.
const resultArea = document.querySelector("#txt-result");

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
    return "You are Lucky!!!! 😇";
  } else {
    return "You are Unlucky 😔";
  }
}

// hideMessage(){
//   resultArea.style.display = "none";
// }

function checkEventListener() {
  // hideMessage();
  const luckyNumValue = luckyNum.value;
  const valueOfDate = valueCheck(birthDate);
  if (valueOfDate === "") {
    resultArea.innerText = "Enter Date of Birth";
  } else {
    if (luckyNumValue === "") {
      resultArea.innerText = "Enter Lucky Number.";
    } else {
      const sumOfDate = getSum(valueOfDate);
      const checkOfLucky = checkLucky(sumOfDate, luckyNumValue);
      resultArea.innerText = checkOfLucky;
    }
  }
}

checkButton.addEventListener("click", () => checkEventListener());
