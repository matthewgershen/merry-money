import React from 'react';
import { connect } from 'react-redux';
import { fetchAllCompanies } from '../../actions/company_actions';
import { Link } from 'react-router-dom';



class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount(){
    this.props.fetchAllCompanies()
  }

  handleInput(e){
    e.preventDefault()
    this.setState({inputVal: e.currentTarget.value});
  }

  matches() {
   const matches = [];
   if (this.state.inputVal.length === 0) {
     return []
   }

   Object.values(this.props.companies).forEach(company => {
     if (company.name.toLowerCase().includes(this.state.inputVal.toLowerCase())) {
       matches.push(company);
     }
   });

   if (matches.length === 0) {
     matches.push('No matches');
   }

   return matches;
 }

  render(){

    const results = this.matches().slice(0,10).map((result) => {
      let stockshow = `stocks/${result.id}`
      return (
        <li key={result.id}><Link to={stockshow}>{result.name}</Link></li>
      );
    });

    return (
      <div>
        <input value={this.state.inputVal} placeholder="Search" onChange={this.handleInput}/>
        <ul>{results}</ul>
      </div>
    )
  }



}




const mapStateToProps = (state) => {
  return {
    companies: state.entities.companies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCompanies: () => dispatch(fetchAllCompanies())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
