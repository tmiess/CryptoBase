import React, { Component } from 'react';
import moment from 'moment';
import './chartTools/App.css';
import LineChart from './chartTools/LineChart';
import ToolTip from './chartTools/ToolTip';

class Chart3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      data: null,
      hoverLoc: null,
      activePoint: null
    };
  }
  handleChartHover(hoverLoc, activePoint){
    this.setState({
      hoverLoc: hoverLoc,
      activePoint: activePoint
    });
  }
  componentDidMount(){
    const getData = () => {
      const url = 'https://getbridgeapp.co/api/crytoapp/litecoinapi';

      fetch(url).then( r => r.json())
        .then((ltcData) => {
          
          const ltcContainer = [];
          ltcContainer.push(ltcData);
          
          console.log("ltcContainer[0][1]: " + ltcContainer[0][0]);
          console.log("ltcData[0]: " + ltcData[1]);

          const sortedData = [];
          let count = 0;
          for (let day in ltcData){
            
            console.log("ltcData: " + ltcContainer[0][0]);
            console.log("ltcContainer[0][0].date: " + ltcContainer[0][0].date);
            console.log("ltcContainer[0][0].close_price: " + ltcContainer[0][0].close_price);
            console.log("ltcData[0].date: " + ltcData[day].date);
            console.log("ltcData[0].close_price: " + ltcData[day].close_price);
            console.log("type of ^: " + typeof ltcData[day].close_price);
            
            sortedData.push({
              d: moment(ltcData[day].date).format('MMM DD'),
              p: ltcData[day].close_price.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
              x: count, //previous days
              y: ltcData[day].close_price // numerical price
            });
            console.log("date: " + moment(ltcData[day].date).format('MMM DD'));
            console.log(sortedData);
            console.log("day: " + day);
            count++;

          }
          this.setState({
            data: sortedData,
            fetchingData: false
          });
        })
        .catch((e) => {
          console.log("there was an error with chart 2: " + e);
        });
    };
    getData();
  }
  render() {
    return (
      
        <div className='container'>
        <h4>LTC</h4>
          <div className='row'>
            <div className='popup'>
              {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}
            </div>
          </div>
          <div className='row'>
            <div className='chart'>
              { !this.state.fetchingData ?
                <LineChart data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
                : null }
            </div>
          </div>
        </div>

    );
  }
}
export default Chart3;