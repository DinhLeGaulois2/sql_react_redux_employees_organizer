import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/employees_organizer/actions'
import DisplayBBBBBBBBBBBBBComponent from '../../components/employees_organizer/DisplayBBBBBBBBBBBBBComponent'

const mapStateToProps = (state) => ({
    bookings: state.TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (bId) => { dispatch(actions.RRRRRRRRRRRRRR(bId))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const DisplayBBBBBBBBBBBBBContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayBBBBBBBBBBBBBComponent)

export default DisplayBBBBBBBBBBBBBContainer