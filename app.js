document.addEventListener("DOMContentLoaded", () => {
  const inputName = document.querySelector("#name");
  const selectTools = document.querySelector("#tools");
  const bmiContent = document.querySelector("#bmi-content");
  const ageContent = document.querySelector("#age-content");
  const height = document.querySelector("#height");
  const weight = document.querySelector("#weight");
  const bmi = document.querySelector("#bmi");
  const age = document.querySelector("#age");

  function helper() {
    const tool = selectTools.value;
    bmiContent.style.display = tool === "BMI" ? "block" : "none";
    ageContent.style.display = tool === "Age Calculator" ? "block" : "none";
  }

  function calcBmi() {
    const name = inputName.value.trim();
    if (!height.value || !weight.value || !name) {
      bmi.innerHTML = "Please enter all fields.";
      return;
    }
    bmi.style.display = "block";
    const heightInMeters = height.value * 0.3048;
    const calc = weight.value / (heightInMeters ** 2);
    bmi.innerHTML = `${name}, your BMI score is ${calc.toFixed(2)}`;
  }

  function calcAge() {
    const name = inputName.value.trim();
    const birthday = new Date(document.getElementById('birth-date').value);
    const currentDate = new Date(document.getElementById('current-date').value);

    if (!name || isNaN(birthday) || isNaN(currentDate)) {
      age.innerText = "Please enter valid dates and name.";
      return;
    }

    let ageOutput = currentDate.getFullYear() - birthday.getFullYear();
    const monthDiff = currentDate.getMonth() - birthday.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthday.getDate())) {
      ageOutput--;
    }
    age.innerText = `${name}, your age is ${ageOutput}`;
  }

  selectTools.addEventListener("change", helper);
  document.querySelector("#calc-bmi-button").addEventListener("click", calcBmi);
  document.querySelector("#calc-age-button").addEventListener("click", calcAge);
});