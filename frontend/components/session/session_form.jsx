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
      <form >
        <h2>{this.props.formType}</h2>

        <label>Email
          <input type='text' value={this.state.email} onChange={this.update('email')}></input>
        </label>

        <label>Password
          <input type='password' value={this.state.password} onChange={this.update('password')}></input>
        </label>

        {this.props.formType === 'Signup' &&
          <div>
            <label>First Name
              <input type='text' value={this.state.first_name} onChange={this.update('first_name')}></input>
            </label>

            <label>Last Name
              <input type='text' value={this.state.last_name} onChange={this.update('last_name')}></input>
            </label>
          </div>
        }
        <button onClick={this.handleSubmit}>{this.props.formType}</button>
      </form>
    );
  }
}
