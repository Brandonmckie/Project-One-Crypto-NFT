var tableBodyEl = document.querySelector('tbody')
function getBinanceDaily() {
    fetch("https://api2.binance.com/api/v3/ticker/24hr").then((response)=>{
        if(!response.ok){
            console.log(response)
            document.write('response is not ok')
        }
        return response.json()
}).then((data) => {
        console.log(data[0])
        for(var i=0;i<10;i++){
            // creates table row element that defines a row of cells in a table.
            var coinTr = document.createElement('tr')
            // creates tabele head element
            var coinTh = document.createElement('th')
            // adds the row attribute too cointh which defines the cell
            coinTh.scope = "row"
            
            var cointd = document.createElement('td')
           // cointd.textContent = data
            coinTh.textContent = data[i].symbol
            coinTr.appendChild(cointd)
            coinTr.appendChild(coinTh)
            //cointd.innerText=data[i].symbol
            tableBodyEl.appendChild(coinTr)
        }
        
    })
}
getBinanceDaily()
