var favorites = localStorage.getItem('favorites')
var favoritesList = JSON.parse(favorites ?? '[]')

var tableBodyEl = document.querySelector('#coins_table')
var searchBarEl = document.getElementById('searchBar')
var coins;
var tableBodyEl = document.querySelector('#coins_table')
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
        if (favoritesList.includes(coins[i].symbol)) {
            coinsToDisplay.push(coins[i])
        }

    }
    for (var i = 0; i < coinsToDisplay.length; i++) {
        // creates table row element that defines a row of cells in a table.

        var coinTr = document.createElement('tr')
        coinTr.classList.add("coin-symbol")
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
        //cointd.innerText=data[i].symbol
        tableBodyEl.appendChild(coinTr)

    }
}
$('#searchBar').on("change", function () {
    displaySymbols($(this).val())
})

//document.getElementById('favBtn').addEventListener('click', function (event) {
 //   return window.location.assign('favorites.html')
//})
function Displaynft(data){
    if(typeof data ==="string"){
       fetch(`https://api.coingecko.com/api/v3/nfts/${data}`).then((response) => response.json()).then((nft) => {
         var NFTTr = document.createElement('tr')
         var NFTTh = document.createElement('th')
         var NFTtd = document.createElement('td')
         var NFTTh_name= document.createElement('th')
         var NFT_volume = document.createElement('th')
         var NFT_floorprice = document.createElement('th')
         var NFT_marketcap = document.createElement('th')
         var NFT_totalsupply= document.createElement('th')
         var NFT_td = document.createElement('td')
         var NFT_img= document.createElement('img')
         var NFT_img_column= document.createElement('th')
         NFTTh.scope = "col"
         
         NFTTr.classList.add("nft_")
         NFTTh_name.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left',"name")
         NFTTh.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
         NFT_volume.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left',"volume")
         NFT_marketcap.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left',"marketcap")
         NFT_floorprice.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left',"floorprice")
         NFT_totalsupply.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left',"totalsupply")
         
         
       
         NFTTh_name.textContent=nft.name
         NFT_marketcap.textContent = nft.market_cap.usd
         NFT_volume.textContent = nft.volume_24h.usd
         NFT_floorprice.textContent = nft.floor_price.usd
         NFT_img.src= nft.image.small
         NFT_totalsupply.textContent=nft.total_supply
         NFT_td.dataset.nft=data
         NFT_td.textContent = 'Save'
         NFT_img_column.appendChild(NFT_img)
         
        
         NFTTr.appendChild(NFT_td)
         NFTTr.appendChild(NFTTh_name)
         NFTTr.appendChild(NFT_img_column)
         NFTTr.appendChild(NFT_marketcap)
         NFTTr.appendChild(NFT_volume)
         NFTTr.appendChild(NFT_floorprice)
         NFTTr.appendChild(NFT_totalsupply)
         nftTable.appendChild(NFTTr) 
        
         
              
         })}}
    var nftTable =document.querySelector("#nft_table") 
    var favorites=localStorage.getItem("nft.favorites")
    var favorites_list=JSON.parse(favorites || "[]")   
    for(var i=0;i<favorites_list.length;i++){
        Displaynft(favorites_list[i])
    }