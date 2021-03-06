{
    const welcome = () => {
        console.log("Hello everyone !");
    };
    const changeQuotation = () => {
        const quotation = document.querySelector(".js-quotation")
        const quotationDisnay = "<i>Sposobem na zaczęcie jest skończenie mówienia<br> i podjęcie działania.</i><br> <p>- Walt Disney</p>";
        const quotationLarson = "<i>Poświęcaj tyle czasu na ulepszanie siebie,<br> byś nie miał go na krytykę innych.</i><br> <p>- Christian D. Larson</p>";
        quotation.innerHTML = quotation.innerHTML === quotationDisnay ? quotationLarson : quotationDisnay;
    };
    const changeQuotationColor = () => {
        const quotation = document.querySelector(".js-quotation")
        const changeColorButton = document.querySelector(".js-changeColorButton");
        quotation.classList.toggle("aside__button--color");
        changeColorButton.innerText = changeColorButton.innerText === "Zmień kolor cytatu" ? "Powrót do czarnego" : "Zmień kolor cytatu";

    }
    const init = () => {
        const changeQuotationButton = document.querySelector(".js-changeQuotationButton");
        changeQuotationButton.addEventListener("click", changeQuotation);

        const changeColorButton = document.querySelector(".js-changeColorButton");
        changeColorButton.addEventListener("click", changeQuotationColor);

    }
    welcome();
    init();

}