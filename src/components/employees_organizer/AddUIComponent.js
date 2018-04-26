import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'
import cst from '../../constants/employees_organizer/cst'

import AddDptContainer from '../../containers/employees_organizer/AddDptContainer'
import AddEmpContainer from '../../containers/employees_organizer/AddEmpContainer'
import AddEmpDptContainer from '../../containers/employees_organizer/AddEmpDptContainer'
import AddManagerContainer from '../../containers/employees_organizer/AddManagerContainer'

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
                onClickChangeStatus("", cst.ADD_MANAGER)
            }}>Add Manager</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_EMP_DPT)
            }}>Add Employee-Department</button>
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
                {status === cst.ADD_MANAGER &&
                    <AddEmpDptContainer />
                }
                {status === cst.ADD_EMP_DPT &&
                    <AddManagerContainer />
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