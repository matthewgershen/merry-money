import { connect } from 'react-redux';
import { login } from './../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
      <div className="login-wrapper">
        <div className="img-placeholder"></div>
        <form className="login-form">
          <h2>Welcome to MerryMoney</h2>

          <div className="label-input">
            <label>Email</label>
            <input type='text' value={this.state.email} onChange={this.update('email')}></input>
          </div>

          <div className="label-input">
            <label>Password</label>
            <input type='password' value={this.state.password} onChange={this.update('password')}></input>
          </div>

          {this.props.errors.session.length > 0 &&
            <p>{this.props.errors.session}</p>
          }

          <Link onClick={()=>this.props.clearErrors()} to='/signup'>Sign Up</Link>

          <button onClick={this.handleSubmit}>Sign In</button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    formType: "Login",
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    processForm: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
