const axios = require ('axios');
const queryUrl1 = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=LTD,42,PBT,BTC,BCH,ETH,DASH,XMR,LTC,CND&tsyms=USD,EUR,GBP,JPY,AED,INR,CAD,AUD,SGD,BHD,BRL,CHF,CNY,HKD,IDR,IRR,KWD,KRW,MYR,MXN,SAR";
//query url for api came from {https://www.cryptocompare.com/api/#-api-data-price-} 
//and the coin stock names came from {https://www.cryptocompare.com/coins/#/btc}
//stock names came from{http://www.x-rates.com/calculator/?from=INR&to=USD&amount=1}
const queryUrl2 = "https://bittrex.com/api/v1.1/public/getmarketsummaries";


axios({
    method: 'get',
    url: queryUrl1,

    
}).then(function(cryptoCoins){
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
});

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

axios.get(queryUrl2).then(function(response){
    // const copy= [response];
    // console.log(response.data[7]);
    const usdMarkets = response.data.result.filter(market => market.MarketName === "USDT-BTC");
    console.log("usdMarkets =" , JSON.stringify(usdMarkets, null, 4));


    // for (let i=0; i< response.data.length; i++){
    //     console.log("WTF..." , response.data);
    // }
}).catch(function(copy){
    console.log(copy);
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