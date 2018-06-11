import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/employees_organizer/employees_organizer_actions'
import DisplayEmpComponent from '../../components/employees_organizer/DisplayEmpComponent'

const mapStateToProps = (state) => ({
    empls: state.empl.data
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (eId) => { dispatch(actions.deleteEmp(eId))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const DisplayEmpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayEmpComponent)

export default DisplayEmpContainer