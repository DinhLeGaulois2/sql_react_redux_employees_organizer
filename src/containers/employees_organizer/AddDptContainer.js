import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/employees_organizer/employees_organizer_actions'
import AddDptComponent from '../../components/employees_organizer/AddDptComponent'

const mapDispatchToProps = (dispatch) => ({
    onClickAddDpt: (data) => { dispatch(actions.addDepartment(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddDptContainer = connect(
    null,
    mapDispatchToProps
)(AddDptComponent)

export default AddDptContainer
