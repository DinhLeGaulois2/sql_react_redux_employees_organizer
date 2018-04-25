import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'
import cst from '../../constants/employees_organizer/cst'

import AddInstructorContainer from '../../containers/employees_organizer/AddInstructorContainer'
import AddStudentContainer from '../../containers/employees_organizer/AddStudentContainer'
import AddCourseContainer from '../../containers/employees_organizer/AddCourseContainer'
import AddDepartmentContainer from '../../containers/employees_organizer/AddDepartmentContainer'

const AddUIComponent = ({ status, menuStatus, onClickChangeStatus }) => (
    <div style={{ 'backgroundColor': 'gray' }}>
        <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr><td align="center" style={{ 'padding': '10px' }}>
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_INSTRUCTOR)
            }}>Add Instructor</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_STUDENT)
            }}>Add Student</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_COURSE)
            }}>Add Course</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_DEPARTMENT)
            }}>Add Department</button>
            <br />
        </td></tr></tbody></table>
        {menuStatus == cst.MENU_ADD &&
            <div>
                {status === cst.ADD_INSTRUCTOR &&
                    <AddInstructorContainer />
                }
                {status === cst.ADD_STUDENT &&
                    <AddStudentContainer />
                }
                {status === cst.ADD_COURSE &&
                    <AddCourseContainer />
                }
                {status === cst.ADD_DEPARTMENT &&
                    <AddDepartmentContainer />
                }
            </div>
        }
    </div>
)

AddUIComponent.prototype = {
    status: PropTypes.string,
    menuStatus: PropTypes.string,
    onClickChangeStatus: PropTypes.func.isRequired
}

export default AddUIComponent