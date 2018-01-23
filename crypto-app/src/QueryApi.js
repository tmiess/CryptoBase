import React, { Component } from "react";
const axios = require ('axios');
// const queryUrl1 = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=LTD,42,PBT,BTC,BCH,ETH,DASH,XMR,LTC,CND&tsyms=USD,EUR,GBP,JPY,AED,INR,CAD,AUD,SGD,BHD,BRL,CHF,CNY,HKD,IDR,IRR,KWD,KRW,MYR,MXN,SAR";
// const queryUrl1 = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=LTD,42,PBT,BTC,BCH,ETH,DASH,XMR,LTC,CND&tsyms=USD,EUR,GBP,JPY,AED,INR,CAD,AUD,SGD,BHD,BRL,CHF,CNY,HKD,IDR,IRR,KWD,KRW,MYR,MXN,SAR";
// axios.get(queryUrl1).then(function(cryptoCoins){
// //   console.log(cryptoCoins.data); 
// console.log("BTC :", cryptoCoins.data.BTC.USD);
// });

class Query extends Component {
    state = {
        crypto: "",
        country: "",
        cryptoQueried: "",
        countryQueried: ""
    }


    
getCurrency = (event) => {
     event.preventDefault();
    const queryUrl3 = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + this.state.crypto + "&tsyms=" + this.state.country;
    axios.get(queryUrl3)
.then((response) => {
    console.log(response.data)
        console.log(response.data);
        let currencyFromKey = Object.keys(response.data)[0]
        let currencyToKey = Object.keys(response.data[currencyFromKey])[0]
    const queryCoin = this.state.crypto;
    console.log("tester "+queryCoin);
    this.setState({
      crypto: "",
      country: "",
      cryptoQueried: "",
      countryQueried: response.data[currencyFromKey][currencyToKey]
  });
 
});// getCurrency("BTC", "USD,EUR")
} 
//   getCurrency = (event) => {
//       freakingArray.forEach((value)=>{
//           axios.get(queryUrl3).then(response)=>{
//               console.log(response)
//           }
//       })
//   }
    
 //ends comparison


handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

 render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.crypto} {this.state.country}
        </p>
        <form className="form">
          <input
            value={this.state.crypto}
            name="crypto"
            onChange={this.handleInputChange}
            type="text"
            placeholder="LTC"
          />
          <input
            value={this.state.country}
            name="country"
            onChange={this.handleInputChange}
            type="text"
            placeholder="USD"
          />
         
          <button onClick={this.getCurrency}>Submit</button>
        </form>
        <div>
        Current Value: {this.state.countryQueried}
        </div>
      </div>
    );
  }
}


export default Query;