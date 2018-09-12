import React from 'react';
import { Link } from 'react-router-dom';


export default class SessionForm extends React.Component {
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
      <div className="session-wrapper">
        <div className="img-placeholder"></div>
        <form className="session-form">
          <h2>{this.props.formType}</h2>

          <div className="label-input">
            <label>Email</label>
            <input type='text' value={this.state.email} onChange={this.update('email')}></input>
          </div>

          <div className="label-input">
            <label>Password</label>
            <input type='password' value={this.state.password} onChange={this.update('password')}></input>
          </div>

          {this.props.formType === 'Signup' &&
            <div>
              <div className="label-input">
                <label>First Name</label>
                <input type='text' value={this.state.first_name} onChange={this.update('first_name')}></input>
              </div>

              <div className="label-input">
                <label>Last Name</label>
                <input type='text' value={this.state.last_name} onChange={this.update('last_name')}></input>
              </div>
            </div>
          }

          {this.props.errors.session.length > 0 &&
            <h3>{this.props.errors.session}</h3>
          }

          <button onClick={this.handleSubmit}>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}
