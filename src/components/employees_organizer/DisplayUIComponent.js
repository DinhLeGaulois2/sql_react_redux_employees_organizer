import React from 'react'
import PropTypes from 'prop-types'

import cst from '../../constants/employees_organizer/cst'

import '../../style.scss'

import DisplayAStudentContainer from '../../containers/employees_organizer/DisplayAStudentContainer'
import DisplayAInstructorContainer from '../../containers/employees_organizer/DisplayAInstructorContainer'
import DisplayACourseContainer from '../../containers/employees_organizer/DisplayACourseContainer'

import DisplayCoursesContainer from '../../containers/employees_organizer/DisplayCoursesContainer'
import DisplayInstructorsContainer from '../../containers/employees_organizer/DisplayInstructorsContainer'
import DisplayStudentsContainer from '../../containers/employees_organizer/DisplayStudentsContainer'


const DisplayUIComponent = ({ status, menuStatus, onClickChangeStatus }) => (
    <div style={{ 'backgroundColor': 'gray' }}>
        <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr><td align="center" style={{ 'padding': '10px' }}>
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.GET_COURSES)
            }}>Show Courses</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.GET_INSTRUCTORS)
            }}>Show Instructors</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.GET_STUDENTS)
            }}>Show Students</button>
            <br />
        </td></tr></tbody></table>
        {menuStatus == cst.MENU_DISPLAY &&
            <div>
                {status === cst.GET_STUDENT_BY_ID_SUCCESS &&
                    <DisplayAStudentContainer />
                }
                {status === cst.GET_INSTRUCTOR_BY_ID_SUCCESS &&
                    <DisplayAInstructorContainer />
                }
                {status === cst.GET_COURSE_BY_ID_SUCCESS &&
                    <DisplayACourseContainer />
                }

                {status === cst.GET_COURSES_SUCCESS &&
                    <DisplayCoursesContainer />
                }
                {status === cst.GET_INSTRUCTORS_SUCCESS &&
                    <DisplayInstructorsContainer />
                }
                {status === cst.GET_STUDENTS_SUCCESS &&
                    <DisplayStudentsContainer />
                }
            </div>
        }
    </div>
)
DisplayUIComponent.prototype = {
    status: PropTypes.string,
    menuStatus: PropTypes.string,
    onClickChangeStatus: PropTypes.func.isRequired,
}

export default DisplayUIComponent