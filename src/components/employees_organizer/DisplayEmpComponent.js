import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'

import Modal from '../../common/modal/modal'

import cst from '../../constants/employees_organizer/cst'

const DisplayEmpComponent = ({ empls, onClickDelete }) => (
    <div>
        <table align="center" style={{ 'width': '80%' }}><tbody>
            {empls.map(empl =>
                <tr key={empl.employeeId}><td style={{ 'backgroundColor': 'white', 'color': 'black', 'padding': '20px', 'borderRadius': '20px' }}>
                    <div className="relative">
                        <h3 align="center" className="centeredChapterTitle"><b>Employee</b>: {empl.first_name} {empl.last_name}</h3>
                        <button type="button" className="btnDelete" onClick={e => {
                            e.preventDefault()
                            onClickDelete(empl.employeeId)
                        }}>x</button>
                        <p><b>Birth</b>: {empl.birth_date}</p>
                        <p><b>Gender</b>: {empl.gender}</p>
                        <p><b>Salary</b>: {empl.salary}</p>
                        <p><b>Title</b>: {empl.title}</p>
                        <p><b>Department</b>: {empl.dpt_name}</p>
                    </div>
                </td></tr>
            )
            }
        </tbody></table>
    </div>
)

DisplayEmpComponent.propTypes = {
    empls: PropTypes.arrayOf(PropTypes.shape({
        employeeId: PropTypes.number,
        birth_date: PropTypes.date,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        gender: PropTypes.string,
        salary: PropTypes.number,
        title: PropTypes.string,
        isManager: PropTypes.bool,
        dpt_name: PropTypes.string
    })),
    onClickDelete: PropTypes.func.isRequired
}

export default DisplayEmpComponent