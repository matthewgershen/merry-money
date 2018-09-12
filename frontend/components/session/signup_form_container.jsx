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
        <form className="signup-form">
          <h2>Make Your Money Move</h2>

          <div className="label-input">
            <label>Email</label>
            <input type='text' value={this.state.email} onChange={this.update('email')}></input>
          </div>

          <div className="label-input">
            <label>Password</label>
            <input type='password' value={this.state.password} onChange={this.update('password')}></input>
          </div>

          <div className="label-input">
            <label>First Name</label>
            <input type='text' value={this.state.first_name} onChange={this.update('first_name')}></input>
          </div>

          <div className="label-input">
            <label>Last Name</label>
            <input type='text' value={this.state.last_name} onChange={this.update('last_name')}></input>
          </div>

          {this.props.errors.session.length > 0 &&
            <p>{this.props.errors.session}</p>
          }

          <Link onClick={()=>this.props.clearErrors()} to='/login'>Log In</Link>

          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
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
