const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const db = require("../models");

module.exports = function (app) {
    app.put("/api/put/employee/salary/", (req, res, next) => {
        db.salary.findOne({ where: { employeeId: req.body.empId } })
            .then(data => {
                if (data == null)
                    res.status(400).json("The Employee with the id of '" + req.body.empId + "' could not be fould!")
                else {
                    db.salary.update({
                        salary: req.body.salary,
                    }, { where: { employeeId: req.body.empId } })
                        .then(data => res.status(200).json("Update Successfully!"))
                        .catch(next)
                }
            })
    })

    app.put("/api/put/employee/title", (req, res, next) => {
        db.title.findOne({ where: { employeeId: req.body.empId } })
            .then(data => {
                if (data == null)
                    res.status(400).json("The title of the employee with the id of '" + req.body.id + "' could not be fould!")
                else {
                    db.title.update({
                        title: req.body.title,
                    }, { where: { id: data[0].id } })
                        .then(data => res.status(200).json("Update Successfully!"))
                        .catch(next)
                }
            })
    })


    app.put("/api/put/employee/department", (req, res, next) => {
        db.dept_emp.findOne({ where: { employeeId: req.body.empId } })
            .then(data => {
                if (data == null)
                    res.status(400).json("The Department of the employee with the id of '" + req.body.id + "' could not be fould!")
                else {
                    db.dept_emp.update({
                        departmentId: req.body.dptId,
                    }, { where: { employeeId: data[0].id } })
                        .then(data => res.status(200).json("Update Successfully!"))
                        .catch(next)
                }
            })
    })
}