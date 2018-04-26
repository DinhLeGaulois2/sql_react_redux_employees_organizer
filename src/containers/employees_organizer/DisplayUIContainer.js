import React from 'react'
import { connect } from 'react-redux'

import DisplayUIComponent from '../../components/employees_organizer/DisplayUIComponent'
import actions from '../../actions/employees_organizer/employees_organizer_actions'

const mapStateToProps = (state) => ({
    status: state.courses.status,
    menuStatus: state.courses.menuStatus
})

const mapDispatchToProps = (dispatch) => ({
    onClickChangeStatus: (p1, p2) => { dispatch(actions.setStatus(p1, p2))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const DisplayUIContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayUIComponent)

export default DisplayUIContainer

