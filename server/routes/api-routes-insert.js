const Sequelize = require('sequelize');
const models = require('../models') // DB's models
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });

const db = require("../models");

module.exports = function (app) {
    app.post("/api/add/department", requireAuth, (req, res, next) => {
        db.department.findOrCreate({ where: { name: req.body.dptName } })
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.post("/api/add/dept-manager", requireAuth, (req, res, next) => {
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

    app.post("/api/add/dept-emp", requireAuth, (req, res, next) => {
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
    app.post("/api/add/employee", requireAuth, (req, res, next) => {
        const obj = req.body
        db.employee.findOrCreate({ where: obj.employee })
            .then(data => {
                let eId = data[0].id
                db.title.findOrCreate({
                    where: {
                        employeeId: eId,
                        title: obj.title.title,
                        from_date: obj.title.from_date,
                        to_date: obj.title.to_date
                    }
                }).then(data => {
                    db.salary.findOrCreate({
                        where: {
                            employeeId: eId,
                            salary: obj.salary.salary,
                            from_date: obj.salary.from_date,
                            to_date: obj.salary.to_date
                        }
                    }).then(data => { 
                        if(obj.title.title=="Manager"){
                            db.dept_manager.findOrCreate({ where: {
                                departmentId: obj.department.departmentId,
                                employeeId: eId,
                                from_date: obj.department.from_date,
                                to_date: obj.department.to_date,
                            }})
                        }
                        else{
                            db.dept_emp.findOrCreate({ where: {
                                departmentId: obj.department.departmentId,
                                employeeId: eId,
                                from_date: obj.department.from_date,
                                to_date: obj.department.to_date,
                            }})
                        }
                        res.status(200).json(data) 
                    })
                        .catch(next)
                }).catch(next)
            }).catch(next)
    })
}