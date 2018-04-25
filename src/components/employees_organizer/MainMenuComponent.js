import React from 'react'
import PropTypes from 'prop-types'

import cst from '../../constants/employees_organizer/cst'

import '../../style.scss'

import AddUIContainer from '../../containers/employees_organizer/AddUIContainer'
import DisplayUIContainer from '../../containers/employees_organizer/DisplayUIContainer'

const MainMenuComponent = ({ menuStatus, changeStatus }) =>
    <div>
        <table style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr>
            <td align="center" style={{ 'padding': '10px' }}>
                {menuStatus == cst.MENU_DISPLAY &&
                    <button type="button" className="btn" onClick={e => {
                        e.preventDefault()
                        changeStatus(cst.MENU_ADD, "")
                    }}>Add</button>
                }
                {menuStatus == cst.MENU_ADD &&
                    <button type="button" className="btn" onClick={e => {
                        e.preventDefault()
                        changeStatus(cst.MENU_DISPLAY, "")
                    }}>Show</button>
                }
            </td>
        </tr></tbody></table>
        <br />
        {menuStatus == cst.MENU_ADD &&
            <AddUIContainer />
        }
        {menuStatus == cst.MENU_DISPLAY &&
            <DisplayUIContainer />
        }
    </div>

MainMenuComponent.prototype = {
    menuStatus: PropTypes.string,
    changeStatus: PropTypes.func.isRequired
}

export default MainMenuComponent