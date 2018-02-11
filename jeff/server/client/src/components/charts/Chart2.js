import React, { Component } from 'react';
import moment from 'moment';
import './chartTools/App.css';
import LineChart from './chartTools/LineChart';
import ToolTip from './chartTools/ToolTip';

class Chart2 extends Component {
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
      const url = 'https://getbridgeapp.co/api/crytoapp/testdata2';

      fetch(url).then( r => r.json())
        .then((ethData) => {
          
          const ethContainer = [];
          ethContainer.push(ethData);
          
          // console.log("ethContainer[0][1]: " + ethContainer[0][0]);
          // console.log("ethData[0]: " + ethData[1]);

          const sortedData = [];
          let count = 0;
          for (let day in ethData){
            
            // console.log("ethData: " + ethContainer[0][0]);
            // console.log("ethContainer[0][0].date: " + ethContainer[0][0].date);
            // console.log("ethContainer[0][0].close_price: " + ethContainer[0][0].close_price);
            // console.log("ethData[0].date: " + ethData[day].date);
            // console.log("ethData[0].close_price: " + ethData[day].close_price);
            // console.log("type of ^: " + typeof ethData[day].close_price);
            
            sortedData.push({
              d: moment(ethData[day].date).format('MMM DD'),
              p: ethData[day].close_price.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
              x: count, //previous days
              y: ethData[day].close_price // numerical price
            });
            // console.log("date: " + moment(ethData[day].date).format('MMM DD'));
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
          console.log("there was an error with chart 2: " + e);
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
export default Chart2;