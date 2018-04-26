import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/employees_organizer/employees_organizer_actions'
import DisplayDptComponent from '../../components/employees_organizer/DisplayDptComponent'

const mapStateToProps = (state) => ({
    bookings: state.TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (bId) => { dispatch(actions.RRRRRRRRRRRRRR(bId))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const DisplayDptContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayDptComponent)

export default DisplayDptContainer