var tableBodyEl = document.querySelector('tbody')

$.get("https://api2.binance.com/api/v3/ticker/24hr", function
    (data) {
    console.log(data)
    for (var i = 0; i < 25; i++) {
        // creates table row element that defines a row of cells in a table.
        var coinTr = document.createElement('tr')
        // creates tabele head element, adds correct attributes and classlists for tailwind
        var coinTh = document.createElement('th')
        coinTh.scope = "col"
        coinTh.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        var cointd = document.createElement('td')
        var coinprce = document.createElement('th')
        coinprce.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        var coinHiPrce = document.createElement('th')
        coinHiPrce.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        var coinOpenprce = document.createElement('th')
        coinOpenprce.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        coinHiPrce.textContent = data[i].highPrice
        coinprce.textContent = data[i].bidPrice
        coinOpenprce.textContent = data[i].openPrice
        // cointd.textContent = data
        coinTh.textContent = data[i].symbol
        coinTr.appendChild(cointd)
        coinTr.appendChild(coinTh)
        coinTr.appendChild(coinprce)
        coinTr.appendChild(coinHiPrce)
        coinTr.appendChild(coinOpenprce)
        //cointd.innerText=data[i].symbol
        tableBodyEl.appendChild(coinTr)

    }


})

    // on click event forward arrow next page: page + 1. back arrow page - 1
