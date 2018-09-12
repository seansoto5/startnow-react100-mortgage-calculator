import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: '',
      rate: '',
      term: '',
      payment: ''};

    this.updateBalance = this.updateBalance.bind(this);
    this.updateRate = this.updateRate.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.updatePayment = this.updatePayment.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  
  updateBalance(e) {
    this.setState({balance: event.target.value})
  }
  updateRate(e) {
    this.setState({rate: event.target.value})
  }
  updateTerm(e) {
    this.setState({term: event.target.value})
  }
  updatePayment(e) {
    this.setState({payment: event.target.value})
  }

  calculate(e) {
    e.preventDefault();
    let balance = this.state.balance;
    console.log(balance);
    let rate = this.state.rate;
    console.log(rate);
    let term = this.state.term;
    console.log(term);

    let i = rate / 100 / 12;
    let n = 12 * term;
    let equationOne = 1 - Math.pow((1 + i), -n);
    let equationTwo = equationOne / i;
    let r = balance / equationTwo;
    let answer = r.toFixed(2);

    this.setState({
      payment: '$' + answer + ' is your monthly payment'
    })
  }

  render() {
    return (
      <div className='container'>
        <h1>
          Mortgage Calculator
        </h1><hr></hr>
        <div className='row'>
          <div className='col-xs-3'>
            <h4>
            Loan Balance
            </h4>
          </div>
          <div className='col-xs-6'>
            <input 
              name = 'balance' 
              type = 'number'
              value  = {this.state.balance}
              onChange = {this.updateBalance}
              placeholder = 'Enter Amount'>
            </input>
          </div>
          <div className='col-xs-3'></div>
        </div>
        <div className='row'>
          <div className='col-xs-3'>
            <h4>
            Interest Rate (APR)
            </h4>
          </div>
          <div className='col-xs-6'>
            <input 
              name = 'rate' 
              type = 'number'
              step = '0.01'
              placeholder ='Enter Amount'
              value = {this.state.rate}
              onChange = {this.updateRate}>
            </input>
          </div>
          <div className='col-xs-3'></div>
        </div>
        <div className='row'>
          <div className='col-xs-3'>
            <h4>
            Loan Term (Years)
            </h4>
          </div>
          <div className='col-xs-6'>
          <select 
            name ='term'
            type ='number'
            onChange = {this.updateTerm}>
            <option value='15'>15</option>
            <option value='30'>30</option>
          </select>
          </div>
          <div className='col-xs-3'></div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <button 
              name ='submit' 
              type ='submit' 
              onClick = {this.calculate}
              >Calculate
            </button>
          </div>
        </div>
        <div className='row'>
            <div className='col-xs-12'>
              <div 
                name = 'output'
                id = 'output'
                onChange = {this.updatePayment}>
                <p>{this.state.payment}</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}