// // Heart Icons
// let heartCount = 0;
// let hearts = document.getElementsByClassName("heart-icon-class");
// for (let heart of hearts) {
//   heart.addEventListener("click", function () {
//     heartCount++;
//     document.getElementById("heart-count-id").innerText = heartCount;
//   });
// }

// // alert message
// const serviceNames = document.getElementsByClassName("service-name-class");
// const serviceNumbers = document.getElementsByClassName("service-number-class");
// const callButtons = document.getElementsByClassName("call-btn");

// for (let i = 0; i < callButtons.length; i++) {
//   callButtons[i].addEventListener("click", function () {
//     let serviceName = serviceNames[i].innerText;
//     let serviceNumber = serviceNumbers[i].innerText;
//     alert(`Calling ${serviceName} (${serviceNumber})`);
//   });
// }

// coin count
// let coins = 100;
// let coinCount = document.getElementById("coin-count");
// const callButtons = document.getElementsByClassName("call-btn");

// for (let i = 0; i < callButtons.length; i++) {
//   callButtons[i].addEventListener("click", function () {
//     coins = coins - 20;
//     coinCount.innerText = coins;
//   });
// }

// coins alert message
// let coins = 100;
// // let coinCount = document.getElementById("coin-count");
// // const callButtons = document.getElementsByClassName("call-btn");

// // for (let i = 0; i < callButtons.length; i++) {
// //   callButtons[i].addEventListener("click", function () {
// //     coins = coins - 20;
// //     coinCount.innerText = coins;
// //     if (coins < 20) {
// //       alert("Not enough coins");
// //       coins = 100;
// //       return;
// //     }
// //   });
// }

// list of called history
// const serviceNames = document.getElementsByClassName("service-name-class");
// const serviceNumbers = document.getElementsByClassName("service-number-class");
// const callButtons = document.getElementsByClassName("call-btn");
// let callHistory = document.getElementById("call-history-id");

// for (let i = 0; i < callButtons.length; i++) {
//   callButtons[i].addEventListener("click", function () {
//     let serviceName = serviceNames[i].innerText;
//     let serviceNumber = serviceNumbers[i].innerText;
//     let li = document.createElement("li");
//     li.innerText = `${serviceName}-${serviceNumber}`;
//     callHistory.appendChild(li);
//   });
// }

// // clear history button function
// const clearBtn = document.getElementById("clear-history-btn");
// clearBtn.addEventListener("click", function () {
//   callHistoy.innerHTML = "";
// });

// copy count
// let copyCount = 0;
// let copies = document.getElementsByClassName("copy-btn-class");
// for (let copy of copies) {
//   copy.addEventListener("click", function () {
//     copyCount++;
//     document.getElementById("copy-count-id").innerText = copyCount;
//     alert("Number copied");
//   });
// }

// copy-paste function
const copyButtons = document.querySelectorAll(".copy-btn-class");

for (let btn of copyButtons) {
  btn.addEventListener("click", function () {
    // Find the card
    let card = btn.closest(".card");
    // Get service number text
    let number = card.querySelector(".service-number-class").innerText;

    // Copy to clipboard
    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert(`✅ ${number} copied to clipboard!`);
      })
      .catch((err) => {
        console.error("Copy failed", err);
      });
  });
}

// time of call in history
// const serviceNames = document.getElementsByClassName("service-name-class");
// const serviceNumbers = document.getElementsByClassName("service-number-class");
// const callButtons = document.getElementsByClassName("call-btn");
// let callHistory = document.getElementById("call-history-id");

// let callTime = new Date().toLocaleTimeString();
// for (let i = 0; i < callButtons.length; i++) {
//   callButtons[i].addEventListener("click", function () {
//     let serviceName = serviceNames[i].innerText;
//     let serviceNumber = serviceNumbers[i].innerText;
//     let li = document.createElement("li");
//     li.innerText = `${serviceName}-${serviceNumber} at ${callTime}`;
//     callHistory.appendChild(li);
//   });
// }

// combined code
