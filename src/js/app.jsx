import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loanBalance: '',
      interestRate: '',
      term: '',
      monthlyPayment: '',
    };
    this.updateLoanBalance = this.updateLoanBalance.bind(this);
    this.updateInterestRate = this.updateInterestRate.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.updateMonthlyPayment = this.updateMonthlyPayment.bind(this);
  }

  updateLoanBalance() {
    this.setState({
      loanBalance: ''
    })
  }
  updateInterestRate() {
    this.setState({
      interestRate: ''
    })
  }
  updateTerm() {
    this.setState({
      term: ''
    })
  }
  updateMonthlyPayment() {
    this.setState({
      monthlyPayment: ''
    })
  }

  calculate() {

    let loanBalance = this.state.loanBalance;
    let interestRate = this.state.interestRate;
    let term = this.state.term;

    let o = interestRate / 100 / 12;
    let month = term * 12;
    let topEq = o * Math.pow((1 + o), month);
    let botEq = Math.pow((1 + o), month) - 1;
    let m = loanBalance * (topEq / botEq);
    let answer = m.toFixed(2);

    this.setState({
      monthlyPayment: '$' + answer + ' is your monthly payment.'
    })
  }



  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <h1>
              Mortgage Calculator
            </h1><hr></hr>
          </div>
        </div>

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
              value  = 'Loan Balance'>
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
              placeholder ='0'
              value = {this.state.interestRate}>
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
            placeholder ="Select term">
            <option value='15'>15</option>
            <option value='30'>30</option>
          </select>
          </div>
          <div className='col-xs-3'></div>
        </div>

        <div className='row'>
          <div className='col-xs-12'>
            <button 
              className ='submit' 
              type ='submit' 
              onClick =''
              >Calculate
            </button>
          </div>
        </div>
        <div className='row'>
            <div className='col-xs-12'>
              <div 
                className='output' 
                id='output'>
                <p>{this.state.payment}</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}


