import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/employees_organizer/actions'
import AddEmpComponent from '../../components/employees_organizer/AddEmpComponent'

const mapStateToProps = (state) => ({
    data: state.UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU,
})

const mapDispatchToProps = (dispatch) => ({
    onClickBBBBBBBBBBBBB: (data) => { dispatch(actions.XXXXXXXXXXXXX(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddEmpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddEmpComponent)

export default AddEmpContainer