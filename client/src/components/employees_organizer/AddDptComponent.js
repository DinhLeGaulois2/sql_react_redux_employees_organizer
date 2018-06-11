import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

import '../../style.scss'

const validate = values => {
    const errors = {}

    if (!values.dptName) {
        errors.dptName = "Required"
    }
    return errors
}

let AddDptComponent = ({ handleSubmit, invalid, submitting, reset, onClickAddDpt }) => (
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
                }}>Add Department</div>
            </div>
            <br />
            <form onSubmit={handleSubmit(onClickAddDpt)}>
                <div>
                <Field name="dptName" component={renderInputField} placeholder="Department's Name" /><br />
                </div>
                <br /> <hr />
                <p align="center"><button type="submit" className="btn" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn" disabled={submitting} onClick={reset}>Clear Values</button>
                </p><br/>
            </form>
        </div>
    )

AddDptComponent.propTypes = {
    onClickAddDpt: PropTypes.func.isRequired
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('addDptForm'));

AddDptComponent = reduxForm({
    form: 'addDptForm',
    validate,
    onSubmitSuccess: afterSubmit
})(AddDptComponent)

export default AddDptComponent
