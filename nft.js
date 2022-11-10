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
        var NFT_img= document.createElement('th')
        NFTTh.scope = "col"

        NFTTh.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        NFT_price.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        NFT_highprice.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        NFT_openprice.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        NFT_img.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')

        NFT_highprice.textContent = nft.market_cap.usd
        NFT_price.textContent = nft.volume_24h.usd
        NFT_openprice.textContent = nft.floor_price.usd
        NFT_img.textContent= nft.image
       
        NFTTr.appendChild(NFTtd)
        NFTTr.appendChild(NFTTh)
        NFTTr.appendChild(NFT_price)
        NFTTr.appendChild(NFT_highprice)
        NFTTr.appendChild(NFT_openprice)
        NFTTr.appendChild(NFT_img)
        tableBodyEl.appendChild(NFTTr) 
         
     });
    }})
