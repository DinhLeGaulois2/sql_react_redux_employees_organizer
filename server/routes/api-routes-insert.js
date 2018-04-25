const Sequelize = require('sequelize');
const models = require('../models') // DB's models
var sequelize = models.sequelize

const Op = Sequelize.Op;

const db = require("../models");

module.exports = function (app) {
    app.post("/api/add/department", (req, res, next) => {
        db.department.findOrCreate({ where: { name: req.body.dptName } })
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.post("/api/add/dept-manager", (req, res, next) => {
        const obj = req.body
        db.employee.findOne({ where: { id: obj.employeeId } })
            .then(data => {
                const eId = data.data.id
                db.department.findOne({ where: { id: obj.dptId } })
                    .then(data => {
                        const dId = data.data.id
                        db.dept_manager.findOrCreate({
                            where: {
                                departmentId: dId,
                                employeeId: eId,
                                from_date: obj.from_date,
                                to_date: obj.to_date
                            }
                        }).then(data => res.status(200).json(data))
                            .catch(next)
                    }).catch(next)
            }).catch(next)
    })

    app.post("/api/add/dept-emp", (req, res, next) => {
        const obj = req.body
        db.employee.findOne({ where: { id: obj.employeeId } })
            .then(data => {
                const eId = data.data.id
                db.department.findOne({ where: { id: obj.dptId } })
                    .then(data => {
                        const dId = data.data.id
                        db.dept_emp.findOrCreate({
                            where: {
                                departmentId: dId,
                                employeeId: eId,
                                from_date: obj.from_date,
                                to_date: obj.to_date
                            }
                        }).then(data => res.status(200).json(data))
                            .catch(next)
                    }).catch(next)
            }).catch(next)
    })

    // Need to use 'transaction'
    app.post("/api/add/employee", (req, res, next) => {
        const obj = req.body
        return sequelize.transaction(t => {
            return db.title.findOrCreate({
                where: {
                    title: obj.title,
                    from_date: obj.title_from_date,
                    to_date: obj.title_to_date
                }
            }, { transaction: t }).then(data => {
                return db.salary.findOrCreate({
                    where: {
                        salary: obj.salary,
                        from_date: obj.salary_from_date,
                        to_date: obj.salary_to_date
                    }
                }, { transaction: t })
                    .then(data => {
                        return db.employee.findOrCreate({
                            where: {
                                birth_date: obj.birth_date,
                                first_name: obj.first_name,
                                last_name: obj.last_name,
                                gender: obj.gender,
                                hire_date: obj.hire_date
                            }
                        }) // No "{ transaction: t }" for the last action
                    })
            })
        }).then(data => { res.status(200).json(data) })
            .catch(next)
    })
}