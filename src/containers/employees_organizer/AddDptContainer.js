import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/employees_organizer/actions'
import AddDptComponent from '../../components/employees_organizer/AddDptComponent'

const mapStateToProps = (state) => ({
    data: state.UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU,
})

const mapDispatchToProps = (dispatch) => ({
    onClickBBBBBBBBBBBBB: (data) => { dispatch(actions.XXXXXXXXXXXXX(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddDptContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDptComponent)

export default AddDptContainer
