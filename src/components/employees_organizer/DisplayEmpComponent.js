import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'

import Modal from '../../common/modal/modal'

import cst from '../../constants/employees_organizer/cst'

const DisplayEmpComponent = ({  }) => (
    <div>
        <table align="center" style={{ 'width': '80%' }}><tbody>
            {HHHHHHHHHHHHH.map((HHHH, index) =>
                <tr key={index}>
                    <DisplayEmpComponentItem
                        key={HHHH.id}
                        {...HHHH}
                        HHHH={onClickDelete}
                    />
                </tr>
            )}
        </tbody></table>
    </div>
)

DisplayEmpComponent.propTypes = {
    onClickDelete: PropTypes.func.isRequired
}

export default DisplayEmpComponent