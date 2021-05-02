console.log("Hello everyone !");

let changeQuotationButton = document.querySelector(".js-changeQuotationButton");
let quotation = document.querySelector(".js-quotation")
let changeColorButton = document.querySelector(".js-changeColorButton");



let quotationDisnay = quotation.innerHTML;
let quotationLarson = "<i>Poświęcaj tyle czasu na ulepszanie siebie,<br> byś nie miał go na krytykę innych.</i><br> <p>- Christian D. Larson</p>";

changeQuotationButton.addEventListener("click", () => {
    quotation.innerHTML = quotation.innerHTML === quotationDisnay ? quotationLarson : quotationDisnay;
});

changeColorButton.addEventListener("click", () => {
    quotation.classList.toggle("newQuotation");
});

changeColorButton.addEventListener("click", () => {
    changeColorButton.innerText = changeColorButton.innerText === "Zmień kolor cytatu" ? "Powrót do czarnego" : "Zmień kolor cytatu";

});


