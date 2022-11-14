// Vraiable declaration
var tableBodyEl =document.querySelector("tbody")
var nft_id =[]
// Fetch Function gets initial list of items
fetch('https://api.coingecko.com/api/v3/nfts/list')
  .then((response) => response.json())
  .then((data) =>{
   // loop creates 100 unique items on the list
   for(var i=0;i<100;i++){
    nft_id.push(data[i].id)
     Declare(nft_id[i])
    }} 
  )
    // Function declares items and creates table. Append these properties to the table
    function Declare(data){
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
           NFT_td.classList.add('hover:bg-gray-200', 'text-black', 'font-bold', 'py-2', 'px-4', 'rounded-full', 'w-2', 'p-2', 'border-transparent', 'savebtn',)
            
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
           tableBodyEl.appendChild(NFTTr) 
           Search()
           
                
           })}}
              
           // Function searches all items and matches the name given to that of item(Search Bar)
     function Search(query) {
      if(query !== undefined){
        $(".nft_").remove()
        console.log(query)
        var nftToDisplay = []
        for (var i = 0; i < nft_id.length; i++) {
            if (!query || nft_id[i].toLowerCase().includes(query.toLowerCase())) {
                nftToDisplay.push(nft_id[i])
                Declare(nftToDisplay) 
            }
            if (nftToDisplay.length == 100) {
                break;  }}
            for(var i=0;i<nftToDisplay.length;i++){
            console.log(nftToDisplay)
            Declare(nftToDisplay[i])  }
            }}
    
       $('#searchBar').on("change", function(){
       Search($(this).val())}) 
      
       tableBodyEl.addEventListener('click', function (event) {
        if (event.target.matches('.savebtn')) {
          addtoNFTFavorites(event.target.dataset.nft)
            }})

      function addtoNFTFavorites(nft){
        var favorites=localStorage.getItem("nft.favorites")
        var favorites_list=JSON.parse(favorites || "[]")
        favorites_list.push(nft)
        localStorage.setItem("nft.favorites",JSON.stringify(favorites_list))
      }
      
