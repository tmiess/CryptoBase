const axios = require ('axios');
const queryUrl3 = "https://chasing-coins.com/api/v1/convert/";
const slash = "/";
const currencyArray = ["USD","EUR","GBP","JPY","AED","INR","CAD","AUD","SGD","BHD","BRL","CHF","CNY","HKD","IDR","IRR","KWD","KRW","MYR","MXN","SAR"];
const cryptoArray = ["LTD","42","PBT","BTC","BCH","ETH","DASH","XMR","LTC","CND"];

// console.log(cryptoArray[0]);

// let one = cryptoArray[0];
// console.log(one)

// $.each(cryptoArry,function(indoex,value){
//     console.log(queryUrl3 + value + slash + "USD")
// })

// const USD = {};
// cryptoArray.forEach(function(value){
//     // console.log(queryUrl3 + value + slash + "USD");
//     // USD.push(queryUrl3 + value + slash + "USD");
//     USD[value]=(queryUrl3 + value + slash + "USD");
// });
// console.log(USD);
function getCurrency(crypto, fiat){
    axios.get(queryUrl3 + crypto + slash + fiat)
} return getCurrency;

// const fourTwo = {};
currencyArray.forEach(function(value){
    // fourTwo[value]=(queryUrl3 + "42" + slash + value);

    axios.get(queryUrl3 + "42" + slash + value).then(function(response){
    console.log("42: ",response.data);
    });
});

// currencyArray.forEach(function(value){
//     axios.get(queryUrl3 + "LTD" + slash + value).then(function(response){
//         console.log("LTD: ", response.data);
//     });
// })
// console.log(fourTwo);



// axios.get(let updated= {};
// for (queryUrl3 = 0; queryUrl3 < cryptoArray.length * currencyArray.length; queryUrl3 ++){
// let cooloo =     
// }