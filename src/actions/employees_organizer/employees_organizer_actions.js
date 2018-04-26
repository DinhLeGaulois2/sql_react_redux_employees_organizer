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
                .catch(err => { alert(err) })
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
                .catch(err => { alert(err) })
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
                .catch(err => { alert(err) })
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
                .catch(err => { alert(err) })
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
                .catch(err => { alert(err) })
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
                .catch(err => { alert(err) })
        }
    },

    deleteEmp: (eId) => {
        return dispatch => {
            axios.delete("/api/delete/employee/" + eId)
                .then(response => {
                    //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
                    console.log("/api/delete/employee/: " + JSON.stringify(response, null, 5))
                    axios.get("/api/get/employees")
                        .then(response => {
                            //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
                            console.log("/api/delete/employee/, getbacks : " + JSON.stringify(response, null, 5))
                            dispatch({
                                type: cst.DISPLAY_EMP_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { alert(err) })
                })
                .catch(err => { alert(err) })
        }
    },

    deleteDpt: (dId) => {
        return dispatch => {
            axios.delete("/api/delete/department/" + dId)
                .then(response => {
                    if (response.data.isError) alert(response.data.msg)
                    else {
                        axios.get("/api/get/departments") // reload departments
                            .then(response => {
                                dispatch({
                                    type: cst.DISPLAY_DPT_SUCCESS,
                                    payload: response.data
                                })
                            })
                            .catch(err => { alert(err) })
                    }
                })
                .catch(err => { alert(err) })
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
    //             .catch(err => { alert(err) })
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
    //             .catch(err => { alert(err) })
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
                        .catch(err => { alert(err) })
                }
                else if (actionStatus == cst.DISPLAY_EMP) {
                    axios.get("/api/get/employees")
                        .then(response => {
                            dispatch({
                                type: cst.DISPLAY_EMP_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { alert(err) })
                }
            }
        }
    }
}

export default employees_organizer_actions