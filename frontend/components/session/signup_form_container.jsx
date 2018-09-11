import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from './../../actions/session_actions';


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

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
