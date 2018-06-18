import axios from "axios"

import cst from '../../constants/employees_organizer/cst'

const employees_organizer_actions = {
    addDepartment: (data) => {
        return dispatch => {
            axios.post("http://localhost:3090/api/add/department", data, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            let obj = {
                employee: {
                    birth_date: new Date(data.birth_date),
                    first_name: data.first_name,
                    last_name: data.last_name,
                    gender: data.gender,
                    hire_date: new Date(data.hire_date)
                },
                title: {
                    title: data.title,
                    from_date: new Date(data.title_from_date),
                    to_date: new Date(data.title_to_date)
                },
                department: {
                    departmentId: data.departmentId,
                    from_date: new Date(data.dpt_from_date),
                    to_date: new Date(data.dpt_to_date)
                },
                salary: {
                    salary: parseInt(data.salary, 10),
                    from_date: new Date(data.salary_from_date),
                    to_date: new Date(data.salary_to_date)
                }
            }
            axios.post("http://localhost:3090/api/add/employee", obj, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
                .then(response => {
                    dispatch({
                        type: cst.ADD_EMP_SUCCESS,
                    })
                })
                .catch(err => { alert(err) })
        }
    },

    displayDptById: (dId) => {
        return dispatch => {
            axios.get("http://localhost:3090/api/get/department/" + dId, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.get("http://localhost:3090/api/get/employee/", eId, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.delete("http://localhost:3090/api/delete/employee/" + eId, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
                .then(response => {
                    axios.get("http://localhost:3090/api/get/employees", {
                        headers: {
                            'authorization': localStorage.getItem('token')
                        }
                    })
                        .then(response => {
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
            axios.delete("http://localhost:3090/api/delete/department/" + dId, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
                .then(response => {
                    if (response.data.isError) alert(response.data.msg)
                    else {
                        axios.get("http://localhost:3090/api/get/departments", {
                            headers: {
                                'authorization': localStorage.getItem('token')
                            }
                        }) // reload departments
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
    //         axios.get("http://localhost:3090/api/", data)
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
    //         axios.get("http://localhost:3090/api/", data)
    //             .then(response => {
    //                 dispatch({
    //                     type: cst.LINK_MANAGER_2_DPT_SUCCESS,
    //                 })
    //             })
    //             .catch(err => { alert(err) })
    //     }
    // },

    setStatus: (actionStatus) => {
        return dispatch => {
            if (actionStatus.length > 0) {
                if (actionStatus === cst.DISPLAY_DPT) {
                    axios.get("http://localhost:3090/api/get/departments", {
                        headers: {
                            'authorization': localStorage.getItem('token')
                        }
                    })
                        .then(response => {
                            dispatch({
                                type: cst.DISPLAY_DPT_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { alert(err) })
                }
                else if (actionStatus === cst.DISPLAY_EMP) {
                    axios.get("http://localhost:3090/api/get/employees", {
                        headers: {
                            'authorization': localStorage.getItem('token')
                        }
                    })
                        .then(response => {
                            dispatch({
                                type: cst.DISPLAY_EMP_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { alert(err) })
                }
                else if (actionStatus === cst.ADD_EMP) {
                    axios.get("http://localhost:3090/api/get/departments", {
                        headers: {
                            'authorization': localStorage.getItem('token')
                        }
                    })
                        .then(response => {
                            dispatch({
                                type: cst.DISPLAY_DPT_SUCCESS,
                                payload: response.data
                            })
                            dispatch({ type: actionStatus })
                        })
                        .catch(err => { alert(err) })
                }
                else dispatch({ type: actionStatus })
            }
        }
    }
}

export default employees_organizer_actions