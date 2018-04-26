import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}

    if (!values.PPPPPP) {
        errors.PPPPPP = "Required"
    }
    return errors
}

let AddSalaryComponent = ({  }) => (
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
                }}>MMMMMMMMMMM</div>
            </div>
            <br />
            <form onSubmit={handleSubmit(onClickRRRRRRRR)}>
                <div>
                </div>
                <br /> <hr />
                <p align="center"><button type="submit" className="btnSubmit" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btnSubmit" disabled={submitting} onClick={reset}>Clear Values</button>
                </p><br/>
            </form>
        </div>
    )

AddSalaryComponent.propTypes = {
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('SSSSSSSSForm'));

AddSalaryComponent = reduxForm({
    form: 'SSSSSSSSForm',
    validate,
    onSubmitSuccess: afterSubmit
})(AddSalaryComponent)

// Decorate with connect to read form values
const selector = formValueSelector('SSSSSSSSForm') // <-- same as form name
AddSalaryComponent = connect(
    state => {
        const ZZZZZZZZZZZZZZZZ = selector(state, '');
        return { ZZZZZZZZZZZZZZZZ }
    }
)(AddSalaryComponent)


AddSalaryComponent = connect(
    state => ({
        initialValues: {
        }
    })
)(AddSalaryComponent)

export default AddSalaryComponent
