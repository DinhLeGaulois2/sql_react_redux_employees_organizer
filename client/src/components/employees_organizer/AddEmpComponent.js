import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

import '../../style.scss'

const number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined

const myDate = value =>
    value && !/^(0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])[-](19|20)\d\d$/i.test(value) ? 'Must be a Date with the format "MM-DD-YYYY' : undefined

const validate = values => {
    const errors = {}

    if (!values.first_name) {
        errors.first_name = "*"
    }
    if (!values.last_name) {
        errors.last_name = "*"
    }
    if (!values.gender) {
        errors.gender = "*"
    }
    if (!values.birth_date) {
        errors.birth_date = "*"
    }
    if (!values.hire_date) {
        errors.hire_date = "*"
    }
    if (!values.title) {
        errors.title = "*"
    }
    if (!values.title_from_date) {
        errors.title_from_date = "*"
    }
    if (!values.title_to_date) {
        errors.title_to_date = "*"
    }
    if (!values.departmentId) {
        errors.departmentId = "*"
    }
    if (!values.salary_from_date) {
        errors.salary_from_date = "*"
    }
    if (!values.salary_to_date) {
        errors.salary_to_date = "*"
    }
    if (!values.salary) {
        errors.salary = "*"
    }
    if (!values.dpt_from_date) {
        errors.dpt_from_date = "*"
    }
    if (!values.dpt_to_date) {
        errors.dpt_to_date = "*"
    }
    return errors
}

let AddEmpComponent = ({ handleSubmit, invalid, submitting, reset, dpts, onClickAddEmployee }) => (
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
        <p align="center">[Field with <font color="red">*</font> is required]</p>

        <div className="container">
            <form onSubmit={handleSubmit(onClickAddEmployee)}>
                <div>
                    <Field name="first_name" component={renderInputField} placeholder="First Name" /><br />
                    <Field name="last_name" component={renderInputField} placeholder="Last Name" /><br />
                    <Field name="birth_date" component={renderInputField} validate={myDate} placeholder="Birth's Date (MM-DD-YYYY)" /><br />

                    <label>Gender: &nbsp;</label>
                    <Field name="gender" component='select'>
                        <option></option>
                        <option value="F">Female</option>
                        <option value="M">Male</option>
                    </Field><br /><br />
                    <Field name="hire_date" component={renderInputField} validate={myDate} placeholder="Hire Date (MM-DD-YYYY)" /><br />

                    <hr />
                    <label>Title: &nbsp;</label>
                    <Field name="title" component='select'>
                        <option></option>
                        <option value="Manager">Manager</option>
                        <option value="Employee">Employee</option>
                    </Field><br /><br />
                    <ul style={{'listStyleType': 'none'}}>
                        <li><Field name="title_from_date" component={renderInputField} placeholder="From Date (MM-DD-YYYY)" /></li>
                    <li><Field name="title_to_date" component={renderInputField} placeholder="To Date (MM-DD-YYYY)" /></li>
                    </ul>

                    <hr />
                    <label>Department: &nbsp;</label>
                    <Field name="departmentId" component='select'>
                        <option></option>
                        {dpts.map(d =>
                            <option key={d.id} value={d.id}>{d.name}</option>
                        )}
                    </Field><br />
                    <ul style={{'listStyleType': 'none'}}>
                        <li><Field name="dpt_from_date" component={renderInputField} validate={myDate} placeholder="From Date (MM-DD-YYYY)" /></li>
                        <li><Field name="dpt_to_date" component={renderInputField} validate={myDate} placeholder="To Date (MM-DD-YYYY)" /><br /></li>
                    </ul>

                    <hr />
                    <Field name="salary" component={renderInputField} validate={number} placeholder="Salary" /><br />
                    <ul style={{'listStyleType': 'none'}}>
                        <li><Field name="salary_from_date" component={renderInputField} placeholder="From Date (MM-DD-YYYY)" /></li>
                        <li><Field name="salary_to_date" component={renderInputField} placeholder="To Date (MM-DD-YYYY)" /></li>
                    </ul>
                </div>
                <br /> <hr />
                <p align="center"><button type="submit" className="btn" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn" disabled={submitting} onClick={reset}>Clear Values</button>
                </p><br />
            </form>
        </div>
    </div >
)

AddEmpComponent.propTypes = {
    dpts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        depart_managers: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            employeeId: PropTypes.number
        })),
        dept_emps: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            employeeId: PropTypes.number
        }))
    })),
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