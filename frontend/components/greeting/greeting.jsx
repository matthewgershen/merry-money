import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './../search/search_bar';


export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
    // .then(() => history.push("/"));
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="nav-bar">
          <div className="logo-search">
            <img className="nav-logo-img" src={window.logo_url}/>
            <SearchBar />
          </div>
          <div className="links">
            <Link to='/'>Home</Link>
            <button onClick={this.handleSubmit}>Logout</button>
          </div>
        </div>
      );
    } else {
      return (
        <nav className="splash-nav">
          <img className="splash-logo-img" src={window.logo_url}/>
          <div className="nav-links">
            <Link className="nav-link" onClick={()=>this.props.clearErrors()} to='/login'>Log In</Link>
            <Link className="nav-link" onClick={()=>this.props.clearErrors()} to='/signup'>Sign Up</Link>
          </div>
        </nav>
      );
    }
  }
}
