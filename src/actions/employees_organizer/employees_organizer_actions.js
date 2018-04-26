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

    displayDptById: (dId) => {
        return dispatch => {
            axios.get("/api/get/department/" + dId)
                .then(response => {
                    dispatch({
                        type: cst.DISPLAY_DPT_BY_ID_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    displayDpt: () => {
        return dispatch => {
            axios.get("/api/get/departments")
                .then(response => {
                    dispatch({
                        type: cst.DISPLAY_DPT_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    displayEmpById: (eId) => {
        return dispatch => {
            axios.get("/api/get/employee/", eId)
                .then(response => {
                    dispatch({
                        type: cst.DISPLAY_EMP_BY_ID_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    displayEmp: () => {
        return dispatch => {
            axios.get("/api/get/employees")
                .then(response => {
                    dispatch({
                        type: cst.DISPLAY_EMP_SUCCESS,
                        payload: response.data
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    deleteEmp: (eId) => {
        return dispatch => {
            axios.delete("/api/delete/employee/" + eId)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_EMP_SUCCESS,
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    deleteDpt: (dId) => {
        return dispatch => {
            axios.get("/api/get/department/" + dId)
                .then(response => {
                    dispatch({
                        type: cst.DELETE_DPT_SUCCESS,
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    // linkEmp2Dpt: (data) => {
    //     return dispatch => {
    //         axios.get("/api/", data)
    //             .then(response => {
    //                 dispatch({
    //                     type: cst.LINK_EMP_2_DPT_SUCCESS,
    //                     payload: response.data
    //                 })
    //             })
    //             .catch(err => { console.log(err) })
    //     }
    // },

    // linkManager2Dpt: (data) => {
    //     return dispatch => {
    //         axios.get("/api/", data)
    //             .then(response => {
    //                 dispatch({
    //                     type: cst.LINK_MANAGER_2_DPT_SUCCESS,
    //                 })
    //             })
    //             .catch(err => { console.log(err) })
    //     }
    // },

    setStatus: (mainStatus, actionStatus) => {
        return dispatch => {
            if (mainStatus.length > 0) dispatch({ type: mainStatus })
            if (actionStatus.length > 0) dispatch({ type: actionStatus })
        }
    }
}

export default myActions