import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Grid, Navbar, NavItem, Nav, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import axios from 'axios';
//crypto currency array that will be used to create the dropdown list.
const cryptoCurrency = ["LTD", "42", "PBT", "BTC", "BCH", "ETH", "DASH", "XMR", "LTC", "CND"];
//function that uses .map to loop through the crypto currency array.
const list_1 = cryptoCurrency.map((cryptoCur) => <option key={cryptoCur} value={cryptoCur}>{cryptoCur}</option>);
// country market codes array that will be used to create the drowndown list
const countryCode = ["USD", "EUR", "GBP", "JPY", "AED", "INR", "CAD", "AUD", "SGD", "BHD", "BRL", "CHF", "CNY", "HKD", "IDR", "IRR", "KWD", "KRW", "MYR", "MXN", "SAR"];
//function that uses .map to loop through the country array
const list_2 = countryCode.map((countryCur) => <option key={countryCur} value={countryCur}>{countryCur}</option>)

//create the CcDrop component that will be exported and rendered in App.js
//It's called CcDrop for CryptoCurreny and CountryCode dropdown list
class CcDrop extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '', //handles the user selections and stores it
      crypto: 'BTC', // this will grab the selection from the crypto array 
      country: 'USD', // this will grab the selection from the country array
      countryQueried: '', //handles the value returned from the two inputs

    };
  }
  
  componentDidMount() {
    this.getCurrency();
  }

  handleCountrySelect = eventKey => {
    this.setState({ country: eventKey }, this.getCurrency);
  }
  
  handleCryptoSelect = eventKey => {
    this.setState({ crypto: eventKey }, this.getCurrency);
  }

  //ajax call
  getCurrency = () => {
    //event.preventDefault();
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
        <Navbar.Form pullRight>
          <DropdownButton title={this.state.country} onSelect={this.handleCountrySelect}>
            {countryCode.map(country => {
              return <MenuItem eventKey={country} active={country === this.state.country}>{country}</MenuItem>;
            })}
          </DropdownButton>{' '}
  
          <DropdownButton title={this.state.crypto} onSelect={this.handleCryptoSelect}>
            {cryptoCurrency.map(crypto => {
              return <MenuItem eventKey={crypto} active={crypto === this.state.crypto}>{crypto}</MenuItem>;
            })}
          </DropdownButton>
        </Navbar.Form>
        <Navbar.Text id="conversion" pullRight>
          Current Value: $ { this.state.countryQueried } { /* shows the value of the crypto currency based on whatever country is selected*/ }
        </Navbar.Text>
      </div>
    );
  }
}

export default CcDrop;
