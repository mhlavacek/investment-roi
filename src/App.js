import React, { Component } from 'react';
import './App.css';

let tickers = [
  {name: 'XRP', market: 'kraken:xrpusd', price: 0.2276544},
  {name: 'ETH', market: 'kraken:ethusd', price: 348.318684},
  {name: 'LTC', market: 'kraken:ltcusd', price: 78.8455199}
]

let investors = [
  {name: 'B', investment: 1000, value: 1400, rate: '28%'},
  {name: 'M', investment: 1000, value: 1300, rate: '23%'},
  {name: 'BM', investment: 1000, value: 1200, rate: '16%'},
  {name: 'J', investment: 1000, value: 1100, rate: '10%'}
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      tickers: tickers,
      investors: investors
    };
  }
  render() {
    return (
      <div>
        <div className="pure-g">
          <div className="pure-u-1">
        <div className="header">
          Investment Returns
        </div>
        </div>
        <div className="pure-u-1">
        <div className="content">
          <h2>Tickers</h2>
          {/* tickers */}
          <div className="pure-g">
            {this.state.tickers.map((ticker) =>
              <div className="pure-u-1-3">
                <div className="ticker">
                  {ticker.name}: ${ticker.price}
                </div>
              </div>)}
          </div>
          {/* investors */}
          <h2>Investors</h2>
          <table className="pure-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              {this.state.investors.map((inv) =>
                <tr>
                  <td>{inv.name}</td>
                  <td>{inv.value}</td>
                  <td className="value--positive">{inv.rate}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
