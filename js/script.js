let submitButton = document.querySelector("#submit");
let rateingPage = document.querySelector(".feedback>.rate");
let thanksPage = document.querySelector(".feedback>.thanks");
let rateing = document.querySelector("#rating");

submitButton.addEventListener("click", function () { 
    rateing.innerHTML = document.querySelector(".feedback>.rate input:checked").value;
    rateingPage.classList.add("hidden");
});
