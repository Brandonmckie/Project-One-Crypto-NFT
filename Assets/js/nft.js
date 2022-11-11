var tableBodyEl =document.querySelector("tbody")
fetch('https://api.coingecko.com/api/v3/nfts/list')
  .then((response) => response.json())
  .then((data) =>{
   console.log(data)
    for(var i=0;i<100;i++){
     fetch(`https://api.coingecko.com/api/v3/nfts/${data[i].id}`).then((response) => response.json()).then((nft) => {
        console.log(nft)
      
        var NFTTr = document.createElement('tr')
        var NFTTh = document.createElement('th')
        var NFTtd = document.createElement('td')
        var NFT_price = document.createElement('th')
        var NFT_openprice = document.createElement('th')
        var NFT_highprice = document.createElement('th')
        var NFT_img= document.createElement('img')
        var NFT_img_column= document.createElement('th')
        NFTTh.scope = "col"

        NFTTr.classList.add("nft-symbol")
        NFTTh.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        NFT_price.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        //NFT_img.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        NFT_highprice.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        NFT_openprice.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
      

        NFT_highprice.textContent = nft.market_cap.usd
        NFT_price.textContent = nft.volume_24h.usd
        NFT_openprice.textContent = nft.floor_price.usd
        NFT_img.src= nft.image.small
        NFT_img_column.appendChild(NFT_img)
       
        NFTTr.appendChild(NFTtd)
        NFTTr.appendChild(NFT_img_column)
        NFTTr.appendChild(NFTTh)
        NFTTr.appendChild(NFT_price)
        NFTTr.appendChild(NFT_highprice)
        NFTTr.appendChild(NFT_openprice)
        tableBodyEl.appendChild(NFTTr) 
        //displaySymbols()
        
         
     });
    /* function displaySymbols(query){
      var nftToDisplay = []
      $(".nft-symbol").remove()
      for(var i=0;i<coins.length;i++){
          if(!query || coins[i].symbol.toLowerCase().includes(query.toLowerCase())){
          nftToDisplay.push(coins[i])
          }
          if(nftToDisplay.length == 25){
          break;
          }
      }}
     $('#searchBar').on("change", function(){
      displaySymbols($(this).val())}) */
    
   }})
