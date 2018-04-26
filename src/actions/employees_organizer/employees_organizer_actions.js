import axios from "axios"

import cst from '../../constants/employees_organizer/cst'

const employees_organizer_actions = {
    addDepartment: (data) => {
        return dispatch => {

            axios.post("/api/add/department", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_DPT_SUCCESS,
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    addEmployee: (data) => {
        return dispatch => {
            axios.post("/api/add/employee", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_EMP_SUCCESS,
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    addEmpDpt: (data) => {
        return dispatch => {
            axios.post("/api/add/dept-emp", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_EMP_DPT_SUCCESS,
                    })
                })
                .catch(err => { console.log(err) })
        }
    },

    addManager: (data) => {
        return dispatch => {
            axios.post("/api/add/dept-manager", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_MANAGER_SUCCESS,
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
            if (actionStatus.length > 0) {
                if (actionStatus == cst.DISPLAY_DPT) {
                    axios.get("/api/get/departments")
                        .then(response => {
                            dispatch({
                                type: cst.DISPLAY_DPT_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { console.log(err) })
                }
                else if (actionStatus == cst.DISPLAY_EMP) {
                    axios.get("/api/get/employees")
                        .then(response => {
                            //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
                            console.log("/api/get/employees, data: " + JSON.stringify(response, null, 5))
                            dispatch({
                                type: cst.DISPLAY_EMP_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { console.log(err) })
                }
            }
        }
    }
}

export default employees_organizer_actions