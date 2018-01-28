import React from "react";
const axios = require ('axios');
//crypto currency array that will be used to create the dropdown list.
const cryptoCurrency = ["LTD","42","PBT","BTC","BCH","ETH","DASH","XMR","LTC","CND"];
//function that uses .map to loop through the crypto currency array.
const list_1 = cryptoCurrency.map((cryptoCur) => <option key={cryptoCur} value={cryptoCur}>{cryptoCur}</option>);
// country market codes array that will be used to create the drowndown list
const countryCode = ["USD","EUR","GBP","JPY","AED","INR","CAD","AUD","SGD","BHD","BRL","CHF","CNY","HKD","IDR","IRR","KWD","KRW","MYR","MXN","SAR"];
//function that uses .map to loop through the country array 
const list_2 = countryCode.map((countryCur)=> <option key={countryCur} value={countryCur}>{countryCur}</option>)

//create the CcDrop component that will be exported and rendered in App.js
//It's called CcDrop for CryptoCurreny and CountryCode dropdown list
class CcDrop extends React.Component {
  constructor() {
    super();
    this.state = { 
        value: '', //handles the user selections and stores it
        crypto: '', // this will grab the selection from the crypto array 
        country: '', // this will grab the selection from the country array
        countryQueried: '', //handles the value returned from the two inputs
        
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value //variabe to hold state change in the dom.  i.e. rendering 
    });  
      
  }
  
//ajax call
  getCurrency = (event) => {
     event.preventDefault();
    const apiUrl = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + this.state.crypto + "&tsyms=" + this.state.country; //api url
    axios.get(apiUrl)
      .then((response) => {
        // console.log(response.data);
        let currencyFromKey = Object.keys(response.data)[0]; //had to use Object.keys()[i] to index into the object returned by this api - if 
        let currencyToKey = Object.keys(response.data[currencyFromKey])[0];
        this.setState({
      countryQueried: response.data[currencyFromKey][currencyToKey]
  });
 
});
} 
  render() {
    return (
    <div>
    <h5>Conversion Center</h5>
      <form onSubmit={this.getCurrency}> {/*when the submit button is clicked, it call my ajax fuction that's handled by axios*/}
        <select name="crypto" className="browser-default" onChange={this.handleChange}> {/*had to use browser-default because materialize css was overiding the native funcationality of list.*/}
            <option value="defaultValue" disabled selected>Cryptocurrency</option> {/*this is used so there's a blank space in the first option in the dropdown box.*/}
            {list_1} {/*crypto list loop*/}
        </select>

        <select name="country" className="browser-default" onChange={this.handleChange}>
            <option value="defaultValue" disabled selected>Country</option>
            {list_2} {/*country list loop*/}
        </select>
        
        <input type="submit" value="Submit" />
      </form>
      <div>
        Current Value: ${this.state.countryQueried} {/* shows the value of the crypto currency based on whatever country is selected*/}
        </div>
     </div>
    );
  }
}

export default CcDrop;