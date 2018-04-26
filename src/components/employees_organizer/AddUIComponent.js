import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'
import cst from '../../constants/employees_organizer/cst'

import AddDptContainer from '../../containers/employees_organizer/AddDptContainer'
import AddEmpContainer from '../../containers/employees_organizer/AddEmpContainer'
import AddSalaryContainer from '../../containers/employees_organizer/AddSalaryContainer'
import AddTitleContainer from '../../containers/employees_organizer/AddTitleContainer'

const AddUIComponent = ({ status, menuStatus, onClickChangeStatus }) => (
    <div style={{ 'backgroundColor': 'gray' }}>
        <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr><td align="center" style={{ 'padding': '10px' }}>
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_DPT)
            }}>Add Department</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_EMP)
            }}>Add Employee</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_SALARY)
            }}>Add Salary</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_TITLE)
            }}>Add Title</button>
            <br />
        </td></tr></tbody></table>
        {menuStatus == cst.MENU_ADD &&
            <div>
                {status === cst.ADD_DPT &&
                    <AddDptContainer />
                }
                {status === cst.ADD_EMP &&
                    <AddEmpContainer />
                }
                {status === cst.ADD_SALARY &&
                    <AddSalaryContainer />
                }
                {status === cst.ADD_TITLE &&
                    <AddTitleContainer />
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