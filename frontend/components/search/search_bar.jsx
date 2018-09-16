import React from 'react';
import { connect } from 'react-redux';
import { fetchAllCompanies } from '../../actions/company_actions';



class SearchBar extends React.Component{
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchAllCompanies()
  }

  render(){
    return (
      <div>Search bar is gonna go all up in here</div>
    )
  }



}




const mapStateToProps = (state) => {
  return {
    companies: state.companies
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
