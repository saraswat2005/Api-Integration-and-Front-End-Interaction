// Change the URL from https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/{date}/{endpoint}
// to
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}
//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
// "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";https://github.com/exchangeratesapi/exchangeratesapi.git
// "https://github.com/exchangeratesapi/exchangeratesapi.git";
//There is one problem in this program that it is not taking the link applied in the app.js the url is facing 404 error code after applying the right link in the get repositry it will work fine
const BASE_URL =
  "https://api.fxfeed.io/v1/latest?base=USD&currencies=EUR,GBP&api_key=fxf_AavNXTfnynU3V6HDFwOY";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const URL = https://api.fxfeed.io/v1/latest?base=${fromCurr.value}&currencies=${toCurr.value},GBP&api_key=fxf_AavNXTfnynU3V6HDFwOY;
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
  let rate = data.rates[toCurr.value.toUpperCase()];

  let finalAmount = amtVal * rate;
  msg.innerText = ${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value};
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = https://flagsapi.com/${countryCode}/flat/64.png;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});