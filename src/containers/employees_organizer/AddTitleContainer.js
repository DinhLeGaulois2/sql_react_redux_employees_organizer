import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/employees_organizer/actions'
import AddGGGGGGGGG from '../../components/employees_organizer/AddGGGGGGGGG'

const mapStateToProps = (state) => ({
    data: state.UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU,
})

const mapDispatchToProps = (dispatch) => ({
    onClickBBBBBBBBBBBBB: (data) => { dispatch(actions.XXXXXXXXXXXXX(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddBBBBBBBBBBBBBContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddGGGGGGGGG)

export default AddBBBBBBBBBBBBBContainer