const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueToConverted = document.querySelector(".currency-value") //valor em outras moedas
    

    
    const dolarToday = 5.02
    const euroToday = 5.38
    const libraToday = 6.27
    const bitcoinToday = 139.985


    if(currencySelect.value == "dolar"){
        //SE o select estiver selecionado o valor de dolar, entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){
        //SE o select estiver selecionado o valor de euro,
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        //Se o select estiver selecionado o valor libra
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcoin"){
        //Se o select estiver selecionado o valor bitcoin
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
    
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) //para formatar numero em real
}



function changeCurrency() {
    const currancyName = document.querySelector("#currency-name")//poderia ser getElementById
    const currancyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar") {
        currancyName.innerHTML = "Dólar Americano"
        currancyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro") {
        currancyName.innerHTML = "Euro"
        currancyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra") {
        currancyName.innerHTML = "Libra"
        currancyImage.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin") {
        currancyName.innerHTML = "Bitcoin"
        currancyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

