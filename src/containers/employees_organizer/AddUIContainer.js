import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/employees_organizer/courseAction'
import AddUIComponent from '../../components/employees_organizer/AddUIComponent'

const mapStateToProps = (state) => ({
    status: state.courses.status,
    menuStatus: state.courses.menuStatus
})

const mapDispatchToProps = (dispatch) => ({
    onClickChangeStatus: (p1, p2) => { dispatch(actions.setStatus(p1, p2))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddUIContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddUIComponent)

export default AddUIContainer

