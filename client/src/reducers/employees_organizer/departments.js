import cst from '../../constants/employees_organizer/cst'

const initialStates = {
    data: [],
    isList: true,
}

const employees_organizer_reducer = (state = initialStates, action) => {
    switch (action.type) {
        case cst.DISPLAY_DPT_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                isList: false
            })
        }
        case cst.DISPLAY_DPT_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                isList: true
            })
        }
        default:
            return state;
    }
}

export default employees_organizer_reducer