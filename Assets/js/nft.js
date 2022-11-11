var tableBodyEl =document.querySelector("tbody")
fetch('https://api.coingecko.com/api/v3/nfts/list')
  .then((response) => response.json())
  .then((data) =>{
   console.log(data)
    for(var i=0;i<100;i++){
     fetch(`https://api.coingecko.com/api/v3/nfts/${data[i].id}`).then((response) => response.json()).then((nft) => {
        console.log(nft)
        /*for(var y=0;y<100;y++){
        var nft_id =[]
        nft_id=nft.name
        }*/
        var NFTTr = document.createElement('tr')
        var NFTTh = document.createElement('th')
        var NFTtd = document.createElement('td')
        var NFTTh_name= document.createElement('th')
        var NFT_volume = document.createElement('th')
        var NFT_openprice = document.createElement('th')
        var NFT_highprice = document.createElement('th')
        //var NFT_totalsupply= document.createElement('th')
        var NFT_img= document.createElement('img')
        var NFT_img_column= document.createElement('th')
        NFTTh.scope = "col"

        NFTTr.classList.add("nft_")
        NFTTh_name.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        NFTTh.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        NFT_volume.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        NFT_highprice.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
        NFT_openprice.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
       // NFT_totalsupply.classList.add('text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'text-left')
      
        NFTTh_name.textContent=nft.name
        NFT_highprice.textContent = nft.market_cap.usd
        NFT_volume.textContent = nft.volume_24h.usd
        NFT_openprice.textContent = nft.floor_price.usd
        NFT_img.src= nft.image.small
       // NFT_totalsupply=nft.total_supply
        NFT_img_column.appendChild(NFT_img)

        NFTTr.appendChild(NFTTh)
        NFTTr.appendChild(NFTTh_name)
        NFTTr.appendChild(NFT_img_column)
        NFTTr.appendChild(NFT_highprice)
        NFTTr.appendChild(NFT_volume)
        NFTTr.appendChild(NFT_openprice)
       // NFTTr.appendChild(NFT_totalsupply)
        tableBodyEl.appendChild(NFTTr) 
       // displaySymbols()
        

        /*function displaySymbols(query){
         for(var i=0;i<nft_id.length;i++){
             if(!query || nft_id.toLowerCase().includes(query.toLowerCase())){
             nftToDisplay.push(nft)
             }
             if(nftToDisplay.length == 100){
             break;
             }
         }}*/
        
         
     });
     //$('#searchBar').on("change", function(){
      //displaySymbols($(this).val())})
    
   }})
