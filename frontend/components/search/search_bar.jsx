import React from 'react';
import { connect } from 'react-redux';
import { fetchAllCompanies } from '../../actions/company_actions';
import { Link, withRouter } from 'react-router-dom';



class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      searchIdx: 0
    };
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)

  }

  componentDidMount(){
    this.props.fetchAllCompanies()
  }

  handleInput(e){
    e.preventDefault()
    this.setState({inputVal: e.currentTarget.value});
  }

  handleSubmit(){
    this.setState({inputVal:''});
  }

  handleKeyDown(e){

    if (e.key === "Enter") {
      let newId = this.matches()[this.state.searchIdx].id
      this.props.history.push(`/stocks/${newId}`)
      this.setState({inputVal:''});

    } else if (e.key === "ArrowDown") {
      if (this.state.searchIdx === this.matches().slice(0,10).length) {
        let newIdx = this.matches().slice(0,10).length
        this.setState({searchIdx: newIdx})
      } else {
        let newIdx = (this.state.searchIdx + 1)
        this.setState({searchIdx: newIdx})
      }
    } else if (e.key === "ArrowUp") {
      if (this.state.searchIdx === 0) {
        this.setState({searchIdx: 0})
      } else {
        let newIdx = (this.state.searchIdx - 1)
        this.setState({searchIdx: newIdx})
      }
    } else {
      this.setState({searchIdx: 0});
    }

  }

  handleEnter(){
    this.matches()[this.state.searchIdx]

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
     matches.push({name:'No matches'});
   }

   return matches;
 }

  render(){
    const results = this.matches().slice(0,10).map((result,idx) => {
      let stockshow = `/stocks/${result.id}`
      return (
        <li className={this.state.searchIdx===idx ? "pick-me" : ""} key={result.id}><Link onClick={this.handleSubmit} to={stockshow}>{result.name}</Link></li>
      );
    });

    return (
      <div>
        <input value={this.state.inputVal}
          placeholder="Search"
          onChange={this.handleInput}
          onKeyDown={this.handleKeyDown}
          />
        <ul className="search-results">{results}</ul>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchBar));
