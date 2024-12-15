const inputEl = document.querySelector(".unit-input");
const convertBtn = document.querySelector(".convert-btn");
const cardEl = document.querySelectorAll(".card");
const kiloEl = document.querySelector(".conversion-result-km");
const feetEl = document.querySelector(".conversion-result-ft");
const literEl = document.querySelector(".conversion-result-lb");

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  const metersToFeet = (baseValue * 3.28084).toFixed(3);
  const feetToMeters = (baseValue / 3.28084).toFixed(3);
  feetEl.textContent = `${baseValue} meters = ${metersToFeet} feet | ${baseValue} feet = ${feetToMeters} meters`;

  // Volume conversion (liters to gallons and gallons to liters)
  const litersToGallons = (baseValue * 0.264172).toFixed(3);
  const gallonsToLiters = (baseValue / 0.264172).toFixed(3);
  literEl.textContent = `${baseValue} liters = ${litersToGallons} gallons | ${baseValue} gallons = ${gallonsToLiters} liters`;

  // Mass conversion (kilograms to pounds and pounds to kilograms)
  const kilosToPounds = (baseValue * 2.20462).toFixed(3);
  const poundsToKilos = (baseValue / 2.20462).toFixed(3);
  kiloEl.textContent = `${baseValue} kilos = ${kilosToPounds} pounds | ${baseValue} pounds = ${poundsToKilos} kilos`;
});
