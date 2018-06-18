import React from 'react'
import '../../style.scss'
import { connect } from 'react-redux'
import requireAuth from '../../components/requireAuth';

import actions from "../../actions/employees_organizer/employees_organizer_actions"
import cst from '../../constants/employees_organizer/cst'

class DisplayDptComponent extends React.Component {
    constructor(props){
        super(props)
        this.props.setStatus(cst.DISPLAY_DPT)
    }

    render() {
        const { dpts, deleteDpt } = this.props
        return (
            <div>
                <table align="center" style={{ 'width': '80%' }}><tbody>
                    {dpts.map((dpt, index) =>
                        <tr key={index}><td style={{ 'backgroundColor': 'white', 'color': 'black', 'padding': '20px', 'borderRadius': '20px' }}>
                            <div className="relative">
                                <h3 align="center" className="centeredChapterTitle"><b>Department</b>: {dpt.name}</h3>
                                <button type="button" className="btnDelete" onClick={e => {
                                    e.preventDefault()
                                    deleteDpt(dpt.id)
                                }}>x</button>
                                <p><b>Number of Managers</b>: {dpt.dept_managers[0].employeeId}</p>
                                <p><b>Number of Employees</b>: {dpt.dept_emps[0].employeeId}</p>
                            </div>
                        </td></tr>
                    )}
                </tbody></table>
            </div>
        )
    }
}

const MapStateToProps = (state) => ({
    dpts: state.departments.data
})

export default connect(MapStateToProps, actions)(requireAuth(DisplayDptComponent))