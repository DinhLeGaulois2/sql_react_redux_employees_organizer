import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'

import Modal from '../../common/modal/modal'

import cst from '../../constants/employees_organizer/cst'

const DisplayDptComponent = ({ dpts, onClickDelete }) => (
    <div>
        <table align="center" style={{ 'width': '80%' }}><tbody>
            {dpts.map((dpt, index) =>
                <tr key={index}><td style={{ 'backgroundColor': 'white', 'color': 'black', 'padding': '20px', 'borderRadius': '20px' }}>
                    <div className="relative">
                        <h3 align="center" className="centeredChapterTitle"><b>Department</b>: {dpt.name}</h3>
                        <button type="button" className="btnDelete" onClick={e => {
                            e.preventDefault()
                            onClickDelete(dpt.id)
                        }}>x</button>
                        <p><b>Number of Managers</b>: {dpt.dept_managers[0].emp_no}</p>
                        <p><b>Number of Employees</b>: {dpt.dept_emps[0].emp_no}</p>
                    </div>
                </td></tr>
            )}
        </tbody></table>
    </div>
)

DisplayDptComponent.propTypes = {
    dpts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        depart_managers: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            emp_no: PropTypes.number
        })),
        dept_emps: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            emp_no: PropTypes.number
        }))
    })),
    onClickDelete: PropTypes.func.isRequired
}

export default DisplayDptComponent