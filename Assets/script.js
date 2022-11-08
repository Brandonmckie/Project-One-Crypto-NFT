var tableBodyEl = document.querySelector('tbody')
var page = 1
var indexStart = 0
var indexEnd = 99
$.get("https://api2.binance.com/api/v3/ticker/24hr",function
(data){
        console.log(data)
        if(page == 1) {
            indexStart=0;
            indexEnd=99;
        }else if(page == 2){
            indexStart=100 
            indexEnd=200
        };
        for(var i=indexStart;i<indexEnd;i++){
            // creates table row element that defines a row of cells in a table.
            var coinTr = document.createElement('tr')
            // creates tabele head element, adds correct attributes and classlists for tailwind
            var coinTh = document.createElement('th')
            coinTh.scope = "col"
            coinTh.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
            var cointd = document.createElement('td')
            // cointd.textContent = data
            coinTh.textContent = data[i].symbol
            coinTr.appendChild(cointd)
            coinTr.appendChild(coinTh)
            //cointd.innerText=data[i].symbol
            tableBodyEl.appendChild(coinTr)
        }
        
        
    })

    // on click event forward arrow next page: page + 1. back arrow page - 1
    