import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      rate: '',
      term: 15,
      payment: ''};
    
    this.updateData = this.updateData.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  
  updateData(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  calculate(e) {
    e.preventDefault();
    let balance = this.state.balance;
    let rate = this.state.rate;
    let term = this.state.term;


    let i = rate / 100 / 12;
    let n = 12 * term;
    let equationOne = i * Math.pow((1 + i), n);
    let equationTwo = Math.pow((1 + i), n) - 1;
    let r = equationOne / equationTwo;
    let final = balance * r;
    let answer = final.toFixed(2);

    this.setState({
      payment: '$' + answer + ' is your monthly payment'
    })
  }

    render() {
    return(
      <div className = 'container'>
      <form>
        <h3>Mortgage Calculator</h3>
          <div>
            <label>
              Loan Balance
              <div>
                <input type='number' name='balance' defaultValue={this.state.balance} onChange={this.updateData}></input>
              </div>
            </label>
            <label>
              Interest Rate (APR)
              <div>
                <input type='number' name='rate' step='0.01' defaultValue={this.state.rate} onChange={this.updateData}></input>
              </div>
            </label>
            <label>
              Loan Term (Years)
              <div>
                <select type='number' name='term' onChange={this.updateData}>
                  <option value='15'>15</option>
                  <option value='30'>30</option>
                </select>
              </div>
            </label>
            <button type='submit' name='submit' onClick={this.calculate}>Calculate</button>
            <div name='output' id='output'>
              <p>{this.state.payment}</p>
            </div>
          </div>
      </form>
      </div>
    );
  }
}

  // render() {
  //   return (
  //     <div className='container'>
  //       <h1>
  //         Mortgage Calculator
  //       </h1><hr></hr>
  //       <div className='row'>
  //         <div className='col-xs-3'>
  //           <h4>
  //           Loan Balance
  //           </h4>
  //         </div>
  //         <div className='col-xs-6'>
  //           <input 
  //             name = 'balance' 
  //             type = 'number'
  //             value  = {this.state.balance}
  //             onChange = {this.updateData}
  //             placeholder = 'Enter Amount'>
  //           </input>
  //         </div>
  //         <div className='col-xs-3'></div>
  //       </div>
  //       <div className='row'>
  //         <div className='col-xs-3'>
  //           <h4>
  //           Interest Rate (APR)
  //           </h4>
  //         </div>
  //         <div className='col-xs-6'>
  //           <input 
  //             name = 'rate' 
  //             type = 'number'
  //             step = '0.01'
  //             placeholder ='Enter Amount'
  //             value = {this.state.rate}
  //             onChange = {this.updateData}>
  //           </input>
  //         </div>
  //         <div className='col-xs-3'></div>
  //       </div>
  //       <div className='row'>
  //         <div className='col-xs-3'>
  //           <h4>
  //           Loan Term (Years)
  //           </h4>
  //         </div>
  //         <div className='col-xs-6'>
  //         <select 
  //           name ='term'
  //           type ='number'
  //           onChange = {this.updateData}>
  //           <option value='15'>15</option>
  //           <option value='30'>30</option>
  //         </select>
  //         </div>
  //         <div className='col-xs-3'></div>
  //       </div>
  //       <div className='row'>
  //         <div className='col-xs-12'>
  //           <button 
  //             name ='submit' 
  //             type ='submit' 
  //             onClick = {this.calculate}
  //             >Calculate
  //           </button>
  //         </div>
  //       </div>
  //       <div className='row'>
  //           <div className='col-xs-12'>
  //             <div 
  //               name = 'output'
  //               id = 'output'>
  //               <p>{this.state.payment}</p>
  //             </div>
  //           </div>
  //       </div>
  //     </div>
  //   );
  // }
