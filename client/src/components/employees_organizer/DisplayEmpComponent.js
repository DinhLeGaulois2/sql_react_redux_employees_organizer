import React from 'react'
import '../../style.scss'
import { connect } from 'react-redux'
import requireAuth from '../../components/requireAuth';

import actions from "../../actions/employees_organizer/employees_organizer_actions"
import cst from '../../constants/employees_organizer/cst'

class DisplayEmpComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props.setStatus(cst.DISPLAY_EMP)
    }

    render() {
        const { empls, deleteEmp } = this.props
        return (
            <div>
                <table align="center" style={{ 'width': '80%' }}><tbody>
                    {empls.map(empl =>
                        <tr key={empl.employeeId}><td style={{ 'backgroundColor': 'white', 'color': 'black', 'padding': '20px', 'borderRadius': '20px' }}>
                            <div className="relative">
                                <h3 align="center" className="centeredChapterTitle"><b>Employee</b>: {empl.first_name} {empl.last_name}</h3>
                                <button type="button" className="btnDelete" onClick={e => {
                                    e.preventDefault()
                                    deleteEmp(empl.employeeId)
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
    }
}

const MapStateToProps = (state) => ({
    empls: state.employees.data
})

export default connect(MapStateToProps, actions)(requireAuth(DisplayEmpComponent))