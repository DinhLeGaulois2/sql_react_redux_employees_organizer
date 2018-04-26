import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/employees_organizer/actions'
import AddManagerComponent from '../../components/employees_organizer/AddManagerComponent'

const mapStateToProps = (state) => ({
    data: state.UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU,
})

const mapDispatchToProps = (dispatch) => ({
    onClickBBBBBBBBBBBBB: (data) => { dispatch(actions.XXXXXXXXXXXXX(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddManagerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddManagerComponent)

export default AddManagerContainer