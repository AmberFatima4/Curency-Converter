// // const dropList = document.querySelectorAll("form select")
// // fromCurr = document.querySelector(".form select")
// // toCurr = document.querySelector(".to select")
// // getButton = document.querySelector(".form button")



// // for (let i = 0; i < dropList.length; i++) {
// //     for (let currency_code in country_list) {
// //       let selected =
// //         i == 0
// //           ? currency_code == "USD"
// //             ? "selected"
// //             : ""
// //           : currency_code == "NPR"
// //           ? "selected"
// //           : "";
// //       let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
// //       dropList[i].insertAdjacentHTML("beforeend", optionTag);
// //     }
// //     dropList[i].addEventListener("change", (e) => {
// //       loadFlag(e.target);
// //     });
// //   }
  
// //   function loadFlag(element) {
// //     for (let code in country_list) {
// //       if (code == element.value) {
// //         let imgTag = element.parentElement.querySelector("img");
// //         imgTag.src = `https://flagcdn.com/48x36/${country_list[
// //           code
// //         ].toLowerCase()}.png`;
// //       }
// //     }
// //   }
  
// //   window.addEventListener("load", () => {
// //     getExchangeRate();
// //   });
  
// //   getButton.addEventListener("click", (e) => {
// //     e.preventDefault();
// //     getExchangeRate();
// //   });
  
// //   const exchangeIcon = document.querySelector("form .icon");
// //   exchangeIcon.addEventListener("click", () => {
// //     let tempCode = fromCurrency.value;
// //     fromCurrency.value = toCurrency.value;
// //     toCurrency.value = tempCode;
// //     loadFlag(fromCurrency);
// //     loadFlag(toCurrency);
// //     getExchangeRate();
// //   });
  
// //   function getExchangeRate() {
// //     const amount = document.querySelector("form input");
// //     const exchangeRateTxt = document.querySelector("form .exchange-rate");
// //     let amountVal = amount.value;
// //     if (amountVal == "" || amountVal == "0") {
// //       amount.value = "1";
// //       amountVal = 1;
// //     }
// //     // let apikey=f8b7a0ddaff85093f1c37c3e;
// //     exchangeRateTxt.innerText = "Getting exchange rate...";
// //     let url = ` https://v6.exchangerate-api.com/v6/f8b7a0ddaff85093f1c37c3e/latest/${fromCurrency.value}`;
// //     fetch(url).then(response => response.json())
// //       .then((result) => {
// //         let exchangeRate = result.conversion_rates[toCurrency.value];
// //         let totalExRate = (amountVal * exchangeRate).toFixed(2);
// //         exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
// //       })
// //       .catch(() => {
// //         exchangeRateTxt.innerText = "Something went wrong";
// //       });
// //   }
//     // sec 
 
// const dropList = document.querySelectorAll("form select");
// const fromCurr = document.querySelector(".form select");
// const toCurr = document.querySelector(".to select");
// const getButton = document.querySelector(".form button");

// for (let i = 0; i < dropList.length; i++) {
//     for (let currency_code in country_list) {
//       let selected =
//         i == 0
//           ? currency_code == "USD"
//             ? "selected"
//             : ""
//           : currency_code == "NPR"
//           ? "selected"
//           : "";
//       let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
//       dropList[i].insertAdjacentHTML("beforeend", optionTag);
//     }
//     dropList[i].addEventListener("change", (e) => {
//       loadFlag(e.target);
//     });
//   }
  
//   function loadFlag(element) {
//     for (let code in country_list) {
//       if (code == element.value) {
//         let imgTag = element.parentElement.querySelector("img");
//         imgTag.src = `https://flagcdn.com/48x36/${country_list[
//           code
//         ].toLowerCase()}.png`;
//       }
//     }
//   }
  
//   window.addEventListener("load", () => {
//     getExchangeRate();
//   });

// getButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   getExchangeRate(fromCurr.value, toCurr.value);
// });

// // function getExchangeRate(fromCurrency, toCurrency) {
// //   const amount = document.querySelector("form input");
// //   const exchangeRateTxt = document.querySelector("form .exchange-rate");
// //   let amountVal = amount.value;
// //   if (amountVal == "" || amountVal == "0") {
// //     amount.value = "1";
// //     amountVal = 1;
// //   }
// //   exchangeRateTxt.innerText = "Getting exchange rate...";
// //   let url = `https://v6.exchangerate-api.com/v6/f8b7a0ddaff85093f1c37c3e/latest/${fromCurrency}`;
// //   fetch(url).then(response => response.json())
// //     .then((result) => {
// //       let exchangeRate = result.conversion_rates[toCurrency];
// //       let totalExRate = (amountVal * exchangeRate).toFixed(2);
// //       exchangeRateTxt.innerText = `${amountVal} ${fromCurrency} = ${totalExRate} ${toCurrency}`;
// //     })
// //     .catch(() => {
// //       exchangeRateTxt.innerText = "Something went wrong";
// //     });
// // }

// /**
//  * Retrieves the exchange rate from the specified API and updates the UI accordingly.
//  * 
//  * @param {string} fromCurrency The currency to convert from.
//  * @param {string} toCurrency The currency to convert to.
//  */
// function getExchangeRate(fromCurrency, toCurrency) {
//     const amountInput = document.querySelector("form input");
//     const exchangeRateText = document.querySelector("form .exchange-rate");
  
//     // Set default amount to 1 if input is empty or 0
//     let amount = amountInput.value.trim() === "" || amountInput.value === "0" ? 1 : parseFloat(amountInput.value);
//     amountInput.value = amount.toString();
  
//     // Update UI to indicate that the exchange rate is being retrieved
//     exchangeRateText.innerText = "Getting exchange rate...";
  
//     // Construct API URL
//     const url = `https://v6.exchangerate-api.com/v6/f8b7a0ddaff85093f1c37c3e/latest/${fromCurrency}`;
//     https://v6.exchangerate-api.com/v6/f8b7a0ddaff85093f1c37c3e/latest/pkr
  
//     // Fetch exchange rate data from API
//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Extract exchange rate from API response
//         const exchangeRate = data.conversion_rates[toCurrency];
  
//         // Calculate total exchange rate
//         const totalExchangeRate = (amount * exchangeRate).toFixed(2);
  
//         // Update UI with calculated exchange rate
//         exchangeRateText.innerText = `${amount} ${fromCurrency} = ${totalExchangeRate} ${toCurrency}`;
//       })
//       .catch(error => {
//         // Update UI to indicate that an error occurred
//         exchangeRateText.innerText = "Something went wrong";
//         console.error("Error retrieving exchange rate:", error);
//       });
//   }

const dropList = document.querySelectorAll("form select"),
  fromCurrency = document.querySelector(".from select"),
  toCurrency = document.querySelector(".to select"),
  getButton = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
  for (let currency_code in country_list) {
    let selected =
      i == 0
        ? currency_code == "USD"
          ? "selected"
          : ""
        : currency_code == "NPR"
        ? "selected"
        : "";
    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
  dropList[i].addEventListener("change", (e) => {
    loadFlag(e.target);
  });
}

function loadFlag(element) {
  for (let code in country_list) {
    if (code == element.value) {
      let imgTag = element.parentElement.querySelector("img");
      imgTag.src = `https://flagcdn.com/48x36/${country_list[
        code
      ].toLowerCase()}.png`;
    }
  }
}

window.addEventListener("load", () => {
  getExchangeRate();
});

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", () => {
  let tempCode = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = tempCode;
  loadFlag(fromCurrency);
  loadFlag(toCurrency);
  getExchangeRate();
});

function getExchangeRate() {
  const amount = document.querySelector("form input");
  const exchangeRateTxt = document.querySelector("form .exchange-rate");
  let amountVal = amount.value;
  if (amountVal == "" || amountVal == "0") {
    amount.value = "1";
    amountVal = 1;
  }
  // let apikey=ce2efcaa5e997895d27c2268;
  exchangeRateTxt.innerText = "Getting exchange rate...";
  let url = ` https://v6.exchangerate-api.com/v6/f8b7a0ddaff85093f1c37c3e/latest/${fromCurrency.value}`;
  fetch(url).then(response => response.json())
    .then((result) => {
      let exchangeRate = result.conversion_rates[toCurrency.value];
      let totalExRate = (amountVal * exchangeRate).toFixed(2);
      exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    })
    .catch(() => {
      exchangeRateTxt.innerText = "Something went wrong";
    });
}