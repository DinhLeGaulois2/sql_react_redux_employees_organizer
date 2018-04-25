import cst from '../../constants/employees_organizer/cst'

const initialStates = {
    data: [],
    status: "",
    menuStatus: ""
}

const myReducer = (state = initialStates, action) => {
    switch (action.type) {

        case cst.MENU_ADD: {
            return Object.assign({}, state, {
                menuStatus: action.type
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

export default myReducer