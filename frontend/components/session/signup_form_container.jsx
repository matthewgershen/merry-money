import { connect } from 'react-redux';
import { signup } from './../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState ({
        [field]: e.currentTarget.value
      });
    };
  }

  render() {
    return (
      <div className="signup-wrapper">
        <div className="top-container">
          <img className="logo-img" src={window.logo_url}/>
          <div className="top-line"></div>
        </div>
        <div className="sub-header">
          <div className="signup-text">
            <h2>Make Your Money Move</h2>
            <p>MerryMoney lets you invest in companies you love, commission-free.</p>
          </div>
        </div>
        <form className="signup-form">
          <div className="group-signup-inputs">
            <div className="first-last">

              <input className="signup-input1-1" type='text' placeholder="First name" value={this.state.first_name} onChange={this.update('first_name')}></input>

              <input className="signup-input1-2" type='text' placeholder="Last name" value={this.state.last_name} onChange={this.update('last_name')}></input>
            </div>

              <input className="signup-input2" type='text' placeholder = "Email address" value={this.state.email} onChange={this.update('email')}></input>

              <input className="signup-input2" placeholder="Password (min. 6 characters)" type='password' value={this.state.password} onChange={this.update('password')}></input>

            {this.props.errors.session.length > 0 &&
              <p>{this.props.errors.session}</p>
            }
          </div>
          <div className="signup-login">
            <button onClick={this.handleSubmit}>Sign Up</button>

            <Link className="login-link" onClick={()=>this.props.clearErrors()} to='/login'>Log In here</Link>
          </div>
        </form>
        <div className="sub-footer">
          <footer>
            All investments involve risk and the past performance of a security, or financial product does not guarantee future results or returns. Keep in mind that while diversification may help spread risk it does not assure a profit, or protect against loss, in a down market. There is always the potential of losing money when you invest in securities, or other financial products. Investors should consider their investment objectives and risks carefully before investing.
            <br/>
            <br/>
            All securities and investments are offered to self-directed customers by MerryMoney Financial, LLC, member FINRA & SIPC. Additional information about your broker can be found by clicking here. MerryMoney Financial, LLC is a wholly owned subsidiary of MerryMoney Markets, Inc.
            <br/>
            <br/>
            Check the background of MerryMoney Financial LLC and MerryMoney Securities, LLC on FINRA’s BrokerCheck.
            <br/>
            <br/>
            MerryMoney Terms & Conditions  Disclosure Library  Contact Us  FAQ
            <br/>
            <br/>
            © 2018 MerryMoney. All rights reserved.
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    formType: "Signup",
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    processForm: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);
