import React from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { renderInputField } from '../../common/reduxForm/renderField'
import { connect } from 'react-redux'
import { compose } from 'redux'
import actions from '../../actions/courses_organizer/courseAction'
import requireAuth from '../../components/requireAuth';

import '../../style.scss'

const validate = values => {
    const errors = {}

    if (!values.dptName) {
        errors.dptName = "Required"
    }
    return errors
}

class AddDptComponent extends React.Component {
    render() {
        const { handleSubmit, invalid, submitting, reset, addDepartment } = this.props
        return (
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
                <form onSubmit={handleSubmit(addDepartment)}>
                    <div>
                        <Field name="dptName" component={renderInputField} placeholder="Department's Name" /><br />
                    </div>
                    <br /> <hr />
                    <p align="center"><button type="submit" className="btn" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn" disabled={submitting} onClick={reset}>Clear Values</button>
                    </p><br />
                </form>
            </div>
        )
    }
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('addDptForm'));

export default compose(
    connect(null, actions),
    reduxForm({
        form: 'addDptForm',
        validate,
        onSubmitSuccess: afterSubmit
    })
)(requireAuth(AddDptComponent))
