import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined

const myDate = value =>
    value && !/^(([1][0-2])?[1-9])-(([1-3][0-9])?[1-9])-20[1-3][0-9]/ ? 'Must be a Date with the format "MM-DD-YYYY' : undefined

const validate = values => {
    const errors = {}

    if (!values.first_name) {
        errors.first_name = "Required"
    }
    if (!values.last_name) {
        errors.last_name = "Required"
    }
    if (!values.birth_date) {
        errors.birth_date = "Required"
    }
    if (!values.hire_date) {
        errors.hire_date = "Required"
    }
    if (!values.title) {
        errors.title = "Required"
    }
    if (!values.title_from_date) {
        errors.title_from_date = "Required"
    }
    if (!values.title_to_date) {
        errors.title_to_date = "Required"
    }
    if (!values.salary) {
        errors.salary = "Required"
    }
    if (!values.salary_from_date) {
        errors.salary_from_date = "Required"
    }
    if (!values.salary_to_date) {
        errors.salary_to_date = "Required"
    }
    return errors
}

let AddEmpComponent = ({ handleSubmit, invalid, submitting, reset, onClickAddEmployee }) => (
    <div>
        <div className="container" style={{ 'backgroundColor': 'white' }}>
            <div align="center" className="mainTitle" style={{
                'backgroundColor': 'black',
                'color': 'cyan',
                'width': '100%',
                'borderRadius': "30px",
                'padding': '10px',
                'fontSize': '300%',
                'fontWeight': 'bold',
                'textAlign': 'center',
                'margin': '20px 0px'
            }}>Add New Employee</div>
        </div>
        <br />
        <div className="container">
            <form onSubmit={handleSubmit(onClickAddEmployee)}>
                <div>
                    <Field name="first_name" component={renderInputField} placeholder="First Name" /><br />
                    <Field name="last_name" component={renderInputField} placeholder="Last Name" /><br />
                    <Field name="birth_date" component={renderInputField} validate={myDate} placeholder="Birth's Date (MM-DD-YYYY)" /><br />
                    <Field name="hire_date" component={renderInputField} validate={myDate} placeholder="Hire Date (MM-DD-YYYY)" /><br />
                    <label>Title: &nbsp;</label>
                    <Field name="title" component='select'>
                        <option></option>
                        <option value="Manager">Manager</option>
                        <option value="Employee">Employee</option>
                    </Field><br />
                    <Field name="title_from_date" component={renderInputField} validate={myDate} placeholder="Title from Date (MM-DD-YYYY)" /><br />
                    <Field name="title_to_date" component={renderInputField} validate={myDate} placeholder="Title to Date (MM-DD-YYYY)" /><br />
                    <Field name="salary" component={renderInputField} validate={number} placeholder="Salary" /><br />
                    <Field name="salary_from_date" component={renderInputField} validate={myDate} placeholder="Salary from Date (MM-DD-YYYY)" /><br />
                    <Field name="salary_to_date" component={renderInputField} validate={myDate} placeholder="Salary to Date (MM-DD-YYYY)" /><br />
                </div>
                <br /> <hr />
                <p align="center"><button type="submit" className="btnSubmit" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btnSubmit" disabled={submitting} onClick={reset}>Clear Values</button>
                </p><br />
            </form>
        </div>
    </div>
)

AddEmpComponent.propTypes = {
    onClickAddEmployee: PropTypes.func.isRequired
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('addEmployeeForm'));

AddEmpComponent = reduxForm({
    form: 'addEmployeeForm',
    validate,
    onSubmitSuccess: afterSubmit
})(AddEmpComponent)

export default AddEmpComponent
