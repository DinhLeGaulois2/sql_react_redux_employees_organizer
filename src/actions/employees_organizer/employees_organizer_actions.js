import axios from "axios"

import cst from '../../constants/employees_organizer/cst'

const myActions = {
    setStatus: (mainStatus, actionStatus) => {
        return dispatch => {
            if (mainStatus.length > 0) dispatch({ type: mainStatus })
        }
    }
}

export default myActions