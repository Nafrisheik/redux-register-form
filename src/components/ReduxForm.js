import React from "react";
import './ReduxForm.css';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addUser } from "../redux/Table/tableActions";
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

let ReduxForm = (props) => {
  const history = useHistory();
  const handleSubmit=(event)=>{
      props.addUser([event.target[0].value,event.target[1].value,event.target[2].value,event.target[6].value]);
      console.log(event.target[0].value);
    event.preventDefault();
    history.push("/");


  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Fill in User details</h1>
      <div className='field'>
        <label htmlFor="Name">Name</label>
        <Field name="Name" component="input" type="text" />
      </div>
      <div className='field'>
        <label htmlFor="Gender">Gender</label>
        <Field name="Gender" component="input" type="text" />
      </div>
      <div className='field'>
        <label htmlFor="Email">Email</label>
        <Field name="Email" component="input" type="email" />
      </div>
      <div className='field'>
        <label htmlFor="Phone">Phone</label>
        <Field name="Phone" component="input" type="number" />
      </div>
      <div className='field'>
        <label htmlFor="City">City</label>
        <Field name="City" component="input" type="text" />
      </div>
      <div className='field'>
        <label htmlFor="Pincode">Pincode</label>
        <Field name="Pincode" component="input" type="number" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    rows: state.table.rows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (value) => dispatch(addUser(value)),
  };
};

ReduxForm = reduxForm({
  // a unique name for the form
  form: "User-Form",
})(ReduxForm);

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
