import React from 'react'
import PropTypes from 'prop-types'

import cst from '../../constants/employees_organizer/cst'

import '../../style.scss'

import DisplayDptContainer from '../../containers/employees_organizer/DisplayDptContainer'
import DisplayEmpContainer from '../../containers/employees_organizer/DisplayEmpContainer'


const DisplayUIComponent = ({ status, menuStatus, onClickChangeStatus }) => (
    <div style={{ 'backgroundColor': 'gray' }}>
        <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr><td align="center" style={{ 'padding': '10px' }}>
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.DISPLAY_DPT)
            }}>Show Departments</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.DISPLAY_EMP)
            }}>Show Employees</button>
            <br />
        </td></tr></tbody></table>
        {menuStatus == cst.MENU_DISPLAY &&
            <div>
                {status === cst.DISPLAY_DPT_SUCCESS &&
                    <DisplayDptContainer />
                }
                {status === cst.DISPLAY_EMP_SUCCESS &&
                    <DisplayEmpContainer />
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