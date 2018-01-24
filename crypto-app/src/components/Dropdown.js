import React, { Component } from "react";
const cryptoCurrency = ["LTD","42","PBT","BTC","BCH","ETH","DASH","XMR","LTC","CND"]
const list_1 = cryptoCurrency.map((cryptoCur) => <option key={cryptoCur} value={cryptoCur}>{cryptoCur}</option>);
console.log(list_1);

const countryCode = ["USD","EUR","GBP","JPY","AED","INR","CAD","AUD","SGD","BHD","BRL","CHF","CNY","HKD","IDR","IRR","KWD","KRW","MYR","MXN","SAR"];
const list_2 = countryCode.map((countryCur)=> <option key={countryCur} value={countryCur}>{countryCur}</option>)


class CcDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field col s12">
            <select  value={this.state.value}  onChange={this.handleChange}>
                <option value="" disabled selected>Choose your option</option>
                {list_1}
            </select>
            <p>
              <label>
                Cryptocurrency:
              </label>
            </p>
        </div>
         <div className="input-field col s12">
            <select  value={this.state.value}  onChange={this.handleChange}>
                <option value="" disabled selected>Choose your option</option>
                {list_2}
            </select>
            <p>
              <label>
                Country:
              </label>
            </p>
        </div>
        <input type="submit" value="Submit" />
      </form>
      
    );
  }
}

export default CcDrop;