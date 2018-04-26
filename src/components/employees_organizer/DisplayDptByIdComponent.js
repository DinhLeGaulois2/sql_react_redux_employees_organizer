import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'

import Modal from '../../common/modal/modal'

import cst from '../../constants/employees_organizer/cst'

const DisplayDptByIdComponentItem = ({  }) =>
    <td style={{ 'backgroundColor': 'black', 'color': 'cyan', 'padding': '10px', 'margin': '5px', 'borderStyle': 'solid', 'borderColor': 'gray' }}>

    </td>

const DisplayDptByIdComponentList = ({  }) => (
    <div>
        <table align="center" style={{ 'width': '80%' }}><tbody>
            {HHHHHHHHHHHHH.map((HHHH, index) =>
                <tr key={index}>
                    <DisplayDptByIdComponentItem
                        key={HHHH.id}
                        {...HHHH}
                        HHHH={onClickDelete}
                    />
                </tr>
            )}
        </tbody></table>
    </div>
)

DisplayDptByIdComponentItem.propTypes = {
}

DisplayDptByIdComponentList.propTypes = {
    onClickDelete: PropTypes.func.isRequired
}

export default DisplayDptByIdComponent