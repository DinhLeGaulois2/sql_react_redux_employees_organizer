import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/employees_organizer/actions'
import AddTitleComponent from '../../components/employees_organizer/AddTitleComponent'

const mapStateToProps = (state) => ({
    bookings: state.TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (bId) => { dispatch(actions.RRRRRRRRRRRRRR(bId))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddTitleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTitleComponent)

export default AddTitleContainer