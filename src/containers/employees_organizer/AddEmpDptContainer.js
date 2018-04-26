import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/employees_organizer/employees_organizer_actions'
import AddEmpDptComponent from '../../components/employees_organizer/AddEmpDptComponent'

const mapStateToProps = (state) => ({
    data: state.UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU,
})

const mapDispatchToProps = (dispatch) => ({
    onClickBBBBBBBBBBBBB: (data) => { dispatch(actions.XXXXXXXXXXXXX(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddEmpDptContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddEmpDptComponent)

export default AddEmpDptContainer