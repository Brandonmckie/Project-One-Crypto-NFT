var tableBodyEl = document.querySelector('tbody')
var searchBarEl = document.getElementById('searchBar')
var coins;
$.get("https://api2.binance.com/api/v3/ticker/24hr", function
    (data) {
    coins = data
    console.log(data)
    displaySymbols()
})

// on click event forward arrow next page: page + 1. back arrow page - 1
function displaySymbols(query) {
    var coinsToDisplay = []
    $(".coin-symbol").remove()
    for (var i = 0; i < coins.length; i++) {
        if (!query || coins[i].symbol.toLowerCase().includes(query.toLowerCase())) {
            coinsToDisplay.push(coins[i])
        }
        if (coinsToDisplay.length == 25) {
            break;
        }
    }
    for (var i = 0; i < coinsToDisplay.length; i++) {
        // creates table row element that defines a row of cells in a table.

        var coinTr = document.createElement('tr')
        coinTr.classList.add("coin-symbol")
        // creates tabele head element, adds correct attributes and classlists for tailwind
        var coinTh = document.createElement('th')
        coinTh.scope = "col"
        coinTh.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left', 'symbol')
        var cointd = document.createElement('td')
        cointd.classList.add('hover:bg-gray-200', 'text-black', 'font-bold', 'py-2', 'px-4', 'rounded-full', 'w-2', 'p-2', 'border-transparent', 'savebtn')
        cointd.textContent = 'Save'
        var coinprce = document.createElement('th')
        coinprce.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left', 'currentPrice')
        var coinHiPrce = document.createElement('th')
        coinHiPrce.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left', 'highPrice')
        var coinOpenprce = document.createElement('th')
        coinOpenprce.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left', 'openPrice')
        coinHiPrce.textContent = coinsToDisplay[i].highPrice
        coinprce.textContent = coinsToDisplay[i].bidPrice
        coinOpenprce.textContent = coinsToDisplay[i].openPrice
        // cointd.textContent = data
        var symbl = coinsToDisplay[i].symbol
        coinTh.textContent = symbl
        coinTr.appendChild(cointd)
        coinTr.appendChild(coinTh)
        coinTr.appendChild(coinprce)
        coinTr.appendChild(coinHiPrce)
        coinTr.appendChild(coinOpenprce)
        coinTr.dataset.symbol = symbl
        //cointd.innerText=data[i].symbol
        tableBodyEl.appendChild(coinTr)
    }
}
$('#searchBar').on("change", function () {
    displaySymbols($(this).val())
})

tableBodyEl.addEventListener('click', function (event) {

    if (event.target.matches('.savebtn')) {
        var tabeleRow = event.target.parentElement
        var rowObject = {
            symbol: tabeleRow.querySelector('.symbol').innerHTML,
            currentPrice: tabeleRow.querySelector('.currentPrice').innerHTML,
            highPrice: tabeleRow.querySelector('.highPrice').innerHTML,
            openPrice: tabeleRow.querySelector('.openPrice').innerHTML,
        }
        var favorites = localStorage.getItem('favorites')
        var favoritesList = JSON.parse(favorites ?? '[]')
        var symbol = tabeleRow.querySelector('.symbol').innerHTML
        if (!favoritesList.includes(symbol)) {
            favoritesList.push(symbol)
            localStorage.setItem('favorites', JSON.stringify(favoritesList))
        }

        // console.log(tabeleRow.querySelector('.symbol').innerHTML)
        // localStorage.setItem('row', JSON.stringify(rowObject))
    }

})

document.getElementById('favBtn').addEventListener('click', function (event) {
    return window.location.assign('favorites.html')
})

