const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const result = document.getElementById("result");
const resultStatement = document.getElementById("result-statement");

function calculateBMI() {
  let weight = weightInput.value;
  let height = heightInput.value;
  // let BMI = (weight / (height / 100) ** 2).toFixed(2);
  let BMI = (weight / (height * height)).toFixed(2);
  result.innerText = BMI;

  if (!weight || !height) {
    alert("Please enter your weight and height");
    result.innerText = "";
    return;
  }

  if (BMI >= 30) {
    resultStatement.innerText = "You are obese";
  } else if (BMI >= 25.0 && BMI < 30) {
    resultStatement.innerText = "You are overweight";
  } else if (BMI >= 18.5 && BMI < 25) {
    resultStatement.innerText = "You are normal";
  } else {
    resultStatement.innerText = "You are underweight";
  }
}
