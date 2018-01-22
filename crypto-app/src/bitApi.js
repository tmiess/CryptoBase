const axios = require ('axios');
//query url for api came from {https://www.cryptocompare.com/api/#-api-data-price-} 
//and the coin stock names came from {https://www.cryptocompare.com/coins/#/btc}
//stock names came from{http://www.x-rates.com/calculator/?from=INR&to=USD&amount=1}
const queryUrl2 = "https://bittrex.com/api/v1.1/public/getmarketsummaries";

const queryUrl3 = "https://chasing-coins.com/api/v1/convert";
const slash = "/";
const currencyArray = ["USD","EUR","GBP","JPY","AED","INR","CAD","AUD","SGD","BHD","BRL","CHF","CNY","HKD","IDR","IRR","KWD","KRW","MYR","MXN","SAR"];
// const cryptoArray = [LTD,42,PBT,BTC,BCH,ETH,DASH,XMR,LTC,CND];
// console.log(currencyArray[0]),

// for (let i = 0; i < currencyArray.length; i++){
//     const country = currencyArray[i];
//     // console.log(country[i].USD);
// }

// axios({
//     method: 'get',
//     url: queryUrl1,

    
// }).then(function(cryptoCoins){
    //  console.log(cryptoCoins)
    //  console.log(cryptoCoins.data);
    // var bitCoin = cryptoCoins.data.BTC;
    // var bitCash = cryptoCoins.data.BCH;
    // // console.log(cryptoCoins.data.BTC);
    // console.log("Bitcoin - BTC ", bitCoin);
    // console.log("Bit Cash - BCH ", bitCash);
    // return cryptoCoins = ({
    //     Bitcoin: cryptoCoins.data.BTC
       
    // });
// });

// axios({
//     method: 'get',
//     url: queryUrl2
// }).then(function(backupApi){
//     backupApi.forEach(function(MarketName){
//         console.log(MarketName)
//     })
// //   console.log(backupApi.data[i]) 
// });

// axios({
//     method: 'get',
//     url: queryUrl2
//     }
// ).then(function(backupApi){
//   let data = backupApi.data;
// //   console.log("data ", data);
//   for (let i = 0; i < data.length; i++){
// // //       console.log("my data ", data[i]);
//     console.log(data[i]);
//     // let market = data[i].MarketName;
//     // console.log(market);
//   }
   
//     });
//   console.log(backupApi.data[i]) 

// axios({
//     method: 'get',
//     url: queryUrl2
//     }
// ).then(function(backupApi){
//   let data = backupApi.data;
//   console.log(data);
// //   let copyData= [];
// //   data.forEach(function(data){
// //       copyData.push(data);
// //   });
// //   console.log(copyData);
//     }.catch(function(error){
//       //Some error occurred
//       console.log("who the fuck knows ", error);
//     })
//     );

axios.get(queryUrl3+slash+"btc"+slash+currencyArray).then(function(response){
    console.log(response.data)
});

axios.get(queryUrl2).then(function(response){
    // const copy= [response];
    // console.log(response.data[7]);
    const usdMarkets = response.data.result.filter(market => market.MarketName.match(/USD/));
    // console.log("usdMarkets =" , JSON.stringify(usdMarkets, null, 4));
 let symbolInfo= {};
    for (let i=0; i< usdMarkets.length; i++){
        // console.log("WTF..." , usdMarkets[i].MarketName);
        // let cooloo = usdMarkets[i];
        let newValue = usdMarkets[i].MarketName;
        let symbol = newValue.slice("USDT-".length);
        // console.log(symbol)
        symbolInfo[symbol]={"USD ": usdMarkets[i].Last}
    }
       
    // console.log(symbolInfo)
    
}).catch(function(copy){
    // console.log(copy);
});
setTimeout(function(){
    console.log("while we're young will yaaa");
},5000);


// axios({
//     url: queryUrl2,
//     params: {
//         High: ""
//     }
// }).then(function(getmoney,two){
//     // let data = getmoney.data;
//     console.log(two)
//     console.log(require('util').inspect(getmoney, true, 200)); 
//     // console.log(data);
// })