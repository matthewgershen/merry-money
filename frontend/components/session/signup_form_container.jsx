import { connect } from 'react-redux';
import { signup, clearErrors } from './../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: ""
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

  toggleHidden(dropdown){
    $(`.${dropdown}`).toggle(200);
    if ($(`#i${dropdown}`).css("color") === "rgb(177, 191, 196)") {
      $(`#i${dropdown}`).css("color","#21ce99");
    } else {
      $(`#i${dropdown}`).css("color","#b1bfc4");
    }
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

              <input className="signup-input2" type='email' placeholder = "Email address" value={this.state.email} onChange={this.update('email')}></input>

              <input className="signup-input2" placeholder="Password (min. 6 characters)" type='password' value={this.state.password} onChange={this.update('password')}></input>

            {this.props.errors.session.length > 0 &&
              <div>
                <p className="errors">{this.props.errors.session[0]}</p>
                <p className="errors">{this.props.errors.session[1]}</p>
                <p className="errors">{this.props.errors.session[2]}</p>
                <p className="errors">{this.props.errors.session[3]}</p>
              </div>
            }

          </div>
          <div className="signup-login">
            <button onClick={this.handleSubmit}>Sign Up</button>

              <div>
                <section onClick={()=>this.toggleHidden('dropdown1')}>
                  <p >How is my personal information handled?</p>
                  <i id="idropdown1" className="fas fa-chevron-down"></i>
                </section>
                <p className="dropdown1">
                  All of your data is 128-bit encrypted & stored securely. We do not sell your personally identifiable information.
                </p>
              </div>

              <div>
                <section onClick={()=>this.toggleHidden('dropdown2')}>
                  <p >Will my contact info be used for advertising?</p>
                  <i id="idropdown2" className="fas fa-chevron-down"></i>
                </section>
                <p className="dropdown2">
                  No. We will only contact you with important updates about your MerryMoney trading account.
                </p>
              </div>

              <Link className="login-link" onClick={()=>this.props.clearErrors()} to='/login'>Already have an account? Log In here.</Link>

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
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);
