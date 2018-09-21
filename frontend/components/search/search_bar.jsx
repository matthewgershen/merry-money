import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../../actions/company_actions';
import { Link, withRouter } from 'react-router-dom';
import { selectCompanies } from './../../reducers/selectors'



class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      searchIdx: 0,
      searched: []
    };
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleMouse = this.handleMouse.bind(this)
    // this.handleBlur = this.handleBlur.bind(this)


  }


  handleInput(e){
    e.preventDefault()
    this.setState({inputVal: e.currentTarget.value});
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    this.timeoutId = setTimeout(()=> {
      this.props.fetchSearch(this.state.inputVal).then((action)=> {
        this.setState({searched:Object.values(action.companies)});
          })},500)


  }

  // handleBlur(){
  //   this.setState({searched: []});
  //   this.setState({inputVal:''});
  // }

  handleSubmit(){
    this.setState({inputVal:''});
    this.setState({searched: []});
  }

  handleMouse(e){
    let idx = parseInt(e.currentTarget.attributes.class.value)
    if (!isNaN(idx)) {
      this.setState({searchIdx: idx});
    }

  }


  handleKeyDown(e){

    if (e.key === "Enter") {
      let newId = this.state.searched[this.state.searchIdx].id
      this.props.history.push(`/stocks/${newId}`)
      this.setState({inputVal:''});
      this.setState({searched: []});
    } else if (e.key === "ArrowDown") {
      if (this.state.searchIdx < this.state.searched.slice(0,10).length-1) {
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
    this.state.searched[this.state.searchIdx]

  }



  render(){
    if (this.state.inputVal === "") {
      return (<div>
        <input value={this.state.inputVal}
          placeholder="Search"
          onChange={this.handleInput}
          onKeyDown={this.handleKeyDown}
          />
      </div>
      )
    } else {
      const results = this.state.searched.slice(0,10).map((result,idx) => {
        let stockshow = `/stocks/${result.id}`
        return (
          <div onClick={this.handleSubmit} key={result.id}>
            <Link to={stockshow} >
              <li onMouseOver={this.handleMouse} className={this.state.searchIdx===idx ? "pick-me" : idx }
                >{result.name}</li>
            </Link>
          </div>
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



}




const mapStateToProps = (state) => {
  return {
    companies: selectCompanies(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearch: (query) => dispatch(fetchSearch(query))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchBar));
