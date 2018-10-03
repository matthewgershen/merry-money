import { connect } from 'react-redux';
import { createTransaction } from './../../actions/transaction_actions';
import React from 'react';
import { Link } from 'react-router-dom';
import { clearErrors } from './../../actions/session_actions'
import { selectAllWatchlistMemberships } from './../../reducers/selectors';


class Transaction extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        shares: '',
        buy: true
      };
      this.handleInput = this.handleInput.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleSwitch = this.handleSwitch.bind(this)
    }


    handleInput(e){
    e.preventDefault()
    this.setState({shares: e.currentTarget.value});
    }

    handleSwitch(){
      if (this.state.buy === true) {
        this.setState({buy: false, shares: ''});
        this.props.clearErrors();
      } else {
        this.setState({buy: true, shares: ''});
        this.props.clearErrors();
      }
    }

    handleSubmit(){
      const transaction1 = {}
        transaction1["user_id"] = this.props.user_id
        transaction1["company_id"] = this.props.company_id
        transaction1["price"] = this.props.stockInfo.quote.latestPrice
        transaction1["shares"] = Number.isInteger(parseInt(this.state.shares)) ? this.state.shares : 0
        transaction1["transaction_type"] = this.state.buy === true ? "buy" : "sell"

      const transaction2 = {}
        transaction2["user_id"] = this.props.user_id
        transaction2["price"] = (this.state.shares * this.props.stockInfo.quote.latestPrice)
        transaction2["transaction_type"] = this.state.buy === true ? "withdraw" : "deposit"

      this.props.createTransaction(transaction1).then(action => this.props.createTransaction(transaction2));
      this.setState({shares: 0});
    }

  render(){

    const color = this.props.color


    if (this.props.loading) {

      return (<div></div>)
    } else if (this.state.buy === true) {

      return(
      <div className="transaction-box">
          <div>
            <div className="head">Buy {this.props.symbol}</div>
            <div className="buy-sell" onClick={this.handleSwitch}>Sell</div>
          </div>
          <div>
            <div className="shares">Shares</div>
            <input
              type="number"
              value={this.state.shares}
              placeholder="0"
              onChange={this.handleInput}
              />
          </div>
          <div>
            <div style={{color: color}} >Market Price</div>
            <div>{this.props.stockInfo.quote.latestPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</div>
          </div>
          <div>
            <div>Estimated Cost</div>
            <div>{(this.state.shares * this.props.stockInfo.quote.latestPrice).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</div>
          </div>
          <button  style={{backgroundColor: color}} onClick={this.handleSubmit}>Submit Buy Order</button>
            {this.props.errors.transaction.length > 0 &&
              <p className="transaction-errors">{this.props.errors.transaction}</p>
            }
          <span className="available" >{this.props.buyingPower.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} Buying Power Available</span>
      </div>
      );
    } else {
      return(
      <div className="transaction-box">
          <div>
            <div className="buy-sell" onClick={this.handleSwitch}>Buy</div>
            <div className="head">Sell {this.props.symbol}</div>
          </div>
          <div>
            <div className="shares">Shares</div>
            <input
              type="number"
              value={this.state.shares}
              placeholder="0"
              onChange={this.handleInput}
              />
          </div>
          <div>
            <div style={{color: color}} >Market Price</div>
            <div>{this.props.stockInfo.quote.latestPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</div>
          </div>
          <div>
            <div>Estimated Value</div>
            <div>{(this.state.shares * this.props.stockInfo.quote.latestPrice).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</div>
          </div>
          <button style={{backgroundColor: color}} onClick={this.handleSubmit}>Submit Sell Order</button>
            {this.props.errors.transaction.length > 0 &&
              <p className="transaction-errors">{this.props.errors.transaction}</p>
            }
          <span className="available" >{this.props.sharesOwned > 0 ? this.props.sharesOwned : 0} Shares Available</span>
      </div>
      );
    }
  }


}


const mapStateToProps = (state) => {
  if (
    !state.entities.stock.company.symbol ||
    !state.entities.stock.stockInfo.quote) {
    return {
      loading: true
    }
  } else {
    return{
      loading: false,
      buyingPower: state.entities.users[state.session.id].buyingPower,
      sharesOwned: state.entities.users[state.session.id].portfolioHoldings[state.entities.stock.company.id],
      portfolioHoldings: state.entities.users[state.session.id].portfolioHoldings,
      symbol: state.entities.stock.company.symbol,
      company_id: state.entities.stock.company.id,
      user_id: state.session.id,
      stockInfo: state.entities.stock.stockInfo,
      errors: state.errors,
      color: state.ui
    };
  }

};

const mapDispatchToProps = (dispatch) => {
  return{
    createTransaction: (transaction) => dispatch(createTransaction(transaction)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transaction);
