import React, { Component } from 'react';
import moment from 'moment';
import './charts/chartTools/App.css';
import LineChart2 from './charts/chartTools/LineChart2';
import ToolTip from './charts/chartTools/ToolTip';
import { Tabs, Tab } from 'react-bootstrap';

class Charts extends Component {
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
      const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';

      fetch(url).then( r => r.json())
        .then((bitcoinData) => {
          const sortedData = [];
          let count = 0;
          for (let date in bitcoinData.bpi){
            
            console.log("typeof price: " + typeof bitcoinData.bpi[date]);
            
            sortedData.push({
              d: moment(date).format('MMM DD'),
              p: bitcoinData.bpi[date].toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
              x: count, //previous days
              y: bitcoinData.bpi[date] // numerical price
            });
            count++;
          }
          this.setState({
            data: sortedData,
            fetchingData: false
          });
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getData();
  }
  render() {
    return (
      
<div className='container'>
              <div className='row'>
                <h3>Price Charts</h3>
              </div>
              <div className='row'>
              <h4>BTC</h4>
                <div className='popup'>
                  {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}
                </div>
              </div>
              <div className='row'>
                <div className='chart'>
                  { !this.state.fetchingData ?
                    <LineChart2 data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
                    : null }
                </div>
              </div>
              <div className='row'>
              <h4>ETH</h4>
                <div className='popup'>
                  {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}
                </div>
              </div>
              <div className='row'>
                <div className='chart'>
                  { !this.state.fetchingData ?
                    <LineChart2 data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
                    : null }
                </div>
              </div>
              <div className='row'>
                <div className='popup'>
                <h4>LTC</h4>
                  {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}
                </div>
              </div>
              <div className='row'>
                <div className='chart'>
                  { !this.state.fetchingData ?
                    <LineChart2 data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
                    : null }
                </div>
              </div>
              <div className='row'>
              <h4>42</h4>
                <div className='popup'>
                  {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}
                </div>
              </div>
              <div className='row'>
                <div className='chart'>
                  { !this.state.fetchingData ?
                    <LineChart2 data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
                    : null }
                </div>
              </div>
</div>

    );
  }
}
export default Charts;