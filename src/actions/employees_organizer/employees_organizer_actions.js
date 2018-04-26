import axios from "axios"

import cst from '../../constants/employees_organizer/cst'

const myActions = {
    addDpt: (data) => {
        return dispatch => {
            axios.get("/api/", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_DPT_SUCCESS,
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    addEmp: (data) => {
        return dispatch => {
            axios.get("/api/", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_EMP_SUCCESS,
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    addSalary: (data) => {
        return dispatch => {
            axios.get("/api/", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_SALARY_SUCCESS,
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    addTitle: (data) => {
        return dispatch => {
            axios.get("/api/", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_TITLE_SUCCESS,
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    displayDpt: (data) => {
        return dispatch => {
            axios.get("/api/", data)
                .then(response => {
                    dispatch({
                        type: cst.DISPLAY_DPT_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    displayEmpbyId: (data) => {
        return dispatch => {
            axios.get("/api/", data)
                .then(response => {
                    dispatch({
                        type: cst.DISPLAY_EMP_BY_ID_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    displayEmp: (data) => {
        return dispatch => {
            axios.get("/api/", data)
                .then(response => {
                    dispatch({
                        type: cst.DISPLAY_EMP_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    linkEmp2Dpt: (data) => {
        return dispatch => {
            axios.get("/api/", data)
                .then(response => {
                    dispatch({
                        type: cst.LINK_EMP_2_DPT_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    linkManager2Dpt: (data) => {
        return dispatch => {
            axios.get("/api/", data)
                .then(response => {
                    dispatch({
                        type: cst.LINK_MANAGER_2_DPT_SUCCESS,
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    setStatus: (mainStatus, actionStatus) => {
        return dispatch => {
            if (mainStatus.length > 0) dispatch({ type: mainStatus })
        }
    }
}

export default myActions