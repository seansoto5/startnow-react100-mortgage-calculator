import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
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
            <input className='balance' type='number'placeholder='0'>
            </input>
          </div>
          <div className='col-xs-3'></div>
        </div>
        <div className='row'>
          <div className='col-xs-3'>
            <h4>
            Interest Rate (%)
            </h4>
          </div>
          <div className='col-xs-6'>
            <input className='rate' type='number'placeholder='0'>
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
          <select className='term' placeholder="Select term">
            <option>15</option>
            <option value={}>30</option>
          </select>
          </div>
          <div className='col-xs-3'></div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <button className='submit' type='button' onClick=''>
            Submit
            </button>
          </div>
        </div>
        <div className='row'>
            <div className='col-xs-12'>
              <p className='output' id='output'>
              </p>
            </div>
        </div>
      </div>
    );
  }
}


