const axios = require ('axios');
const queryUrl1 = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=LTD,42,PBT,BTC,BCH,ETH,DASH,XMR,LTC,CND&tsyms=USD,EUR,GBP,JPY,AED,INR,CAD,AUD,SGD,BHD,BRL,CHF,CNY,HKD,IDR,IRR,KWD,KRW,MYR,MXN,SAR";

axios.get(queryUrl1).then(function(cryptoCoins){
   console.log(cryptoCoins.data); //console.log("BTC :", cryptoCoins.data.BTC);
});