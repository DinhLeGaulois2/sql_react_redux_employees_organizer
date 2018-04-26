import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/employees_organizer/actions'
import DisplayEmpComponent from '../../components/employees_organizer/DisplayEmpComponent'

const mapStateToProps = (state) => ({
    bookings: state.TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (bId) => { dispatch(actions.RRRRRRRRRRRRRR(bId))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const DisplayEmpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayEmpComponent)

export default DisplayEmpContainer