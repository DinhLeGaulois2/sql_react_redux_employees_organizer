import cst from '../../constants/employees_organizer/cst'

const initialStates = {
    data: [],
    status: "",
    menuStatus: ""
}

const employees_organizer_reducer = (state = initialStates, action) => {
    switch (action.type) {
        case cst.ADD_DPT: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.ADD_DPT_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.ADD_MANAGER: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.ADD_MANAGER_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.ADD_EMP: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.ADD_EMP_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.ADD_EMP_DPT: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.ADD_EMP_DPT_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.ADD_SALARY: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.ADD_SALARY_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.ADD_TITLE: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.ADD_TITLE_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.DISPLAY_DPT_BY_ID: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }
        case cst.DISPLAY_DPT_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }
        case cst.DISPLAY_DPT: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }
        case cst.DISPLAY_DPT_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }
        case cst.DISPLAY_EMP_BY_ID: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }
        case cst.DISPLAY_EMP_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }
        case cst.DISPLAY_EMP: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }
        case cst.DISPLAY_EMP_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }
        case cst.LINK_EMP_2_DPT: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.LINK_EMP_2_DPT_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.LINK_MANAGER_2_DPT: {
            return Object.assign({}, state, {
                status: action.type
            })
        }
        case cst.LINK_MANAGER_2_DPT_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.MENU_DISPLAY: {
            return Object.assign({}, state, {
                menuStatus: action.type
            })
        }
    }
    return state;
}

export default employees_organizer_reducer