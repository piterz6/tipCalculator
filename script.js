// geting all needed elements:
const amount = document.querySelector("#amount");
const people = document.querySelector("#people__count");
const tip = document.querySelector("#tip");
const countButton = document.querySelector(".count");
const errorMessage = document.querySelector(".error");
const costMessage = document.querySelector(".cost");
const showResult = document.querySelector(".cost-info");
//count tip main function:
const countFunction = () => {
  // if statement to avoid empty fields and if empty field
  // appear showing error message by changing display property
  if (!amount.value || !people.value || tip.value == "0") {
    errorMessage.style.display = "block";
    //if all fields are filled correctly count result by simple
    //mathematical formula:
  } else {
    //count result
    const result = (+amount.value + +amount.value * +tip.value) / +people.value;
    //changing display property to show result message and hide error message
    showResult.style.display = "block";
    //showing result two places after comma:
    costMessage.textContent = result.toFixed(2);
    errorMessage.style.display = "none";
  }
};
//put event listener on button
countButton.addEventListener("click", countFunction);
