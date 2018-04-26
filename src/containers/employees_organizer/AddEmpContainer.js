import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/employees_organizer/employees_organizer_actions'
import AddEmpComponent from '../../components/employees_organizer/AddEmpComponent'

const mapDispatchToProps = (dispatch) => ({
    onClickAddEmployee: (data) => { dispatch(actions.addEmployee(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddEmpContainer = connect(
    null,
    mapDispatchToProps
)(AddEmpComponent)

export default AddEmpContainer