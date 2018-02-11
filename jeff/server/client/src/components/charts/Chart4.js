import React, { Component } from 'react';
import moment from 'moment';
import './chartTools/App.css';
import LineChart from './chartTools/LineChart';
import ToolTip from './chartTools/ToolTip';

class Chart4 extends Component {
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
      const url = 'https://getbridgeapp.co/api/crytoapp/rippleapi';

      fetch(url).then( r => r.json())
        .then((xrpData) => {
          
          const xrpContainer = [];
          xrpContainer.push(xrpData);
          
          // console.log("xrpContainer[0][1]: " + xrpContainer[0][0]);
          // console.log("xrpData[0]: " + xrpData[1])

          const sortedData = [];
          let count = 0;
          for (let day in xrpData){
            
            // console.log("xrpData: " + xrpContainer[0][0]);
            console.log("xrpContainer[0][0].date: " + xrpContainer[0][0].date);
            // console.log("xrpContainer[0][0].close_price: " + xrpContainer[0][0].close_price);
            // console.log("xrpData[0].date: " + xrpData[day].date);
            // console.log("xrpData[0].close_price: " + xrpData[day].close_price);
            // console.log("type of ^: " + typeof xrpData[day].close_price);
            
            sortedData.push({
              d: moment(xrpData[day].date).format('MMM DD'),
              p: xrpData[day].close_price.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
              x: count, //previous days
              y: xrpData[day].close_price // numerical price
            });
            // console.log("date: " + moment(xrpData[day].date).format('MMM DD'));
            // console.log(sortedData);
            // console.log("day: " + day);
            count++;

          }
          this.setState({
            data: sortedData,
            fetchingData: false
          });
        })
        .catch((e) => {
          // console.log("there was an error with chart 2: " + e);
        });
    };
    getData();
  }
  render() {
    return (
      
        <div className='container'>
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
export default Chart4;