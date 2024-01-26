const convertButton= document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarTodey = 4.93
    const euroToday = 5.38
    const librasToday = 6.26

        
    if(currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarTodey)
    }

    if(currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }

    if(currencySelect.value == "Libras") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/librasToday)
    }
  
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "Libras") {
        currencyName.innerHTML = "Libras"
        currencyImage.src = "./assets/libras.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues )