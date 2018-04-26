const Sequelize = require('sequelize');
const models = require('../models') // DB's models
var sequelize = models.sequelize

const Op = Sequelize.Op;

const db = require("../models");

module.exports = function (app) {
    ///////////////////////////////////////////////////////////////
    /////////////////// Need to use TRANSACTION ///////////////////
    ///////////////////////////////////////////////////////////////

    app.delete("/api/delete/department/:id", (req, res, next) => {
        db.dept_manager.findAll({ where: { id: req.params.id } })
            .then(data => {
                if (data == null) {
                    db.dept_emp.findAll({ where: { id: req.params.id } })
                        .then(data => {
                            if (data == null) {
                                db.department.destroy({ where: { id: req.params.id } })
                                    .then(data => res.status(200).json({
                                        isError: false,
                                        msg: "Delation Successfully!"
                                    }))
                                    .catch(next)
                            }
                            else res.status(200).json({
                                isError: true,
                                msg: "Department Still Has Employee(s): Could not Be Deleted"
                            })
                        })
                }
                else res.status(200).json({
                    isError: true,
                    msg: "Department Still Has Manager(s): Could not Be Deleted"
                })
            })
            .catch(next)
    })

    app.delete("/api/delete/employee/:id", (req, res, next) => {
        return sequelize.transaction(t => {
            return db.dept_emp.destroy({ // delete "department-employee" relationship
                where: { employeeId: req.params.id }
            }, { transaction: t }).then(data => {
                return db.dept_manager.destroy({ // delete "department-employee" relationship
                    where: { employeeId: req.params.id }
                }, { transaction: t }).then(data => {
                    return db.title.destroy({ // delete the "title" of the employee
                        where: { employeeId: req.params.id }
                    }, { transaction: t }).then(data => {
                        return db.salary.destroy({ // delete the "salary" of the employee
                            where: { employeeId: req.params.id }
                        }, { transaction: t }).then(data => {
                            return db.employee.destroy({ where: { id: req.params.id } })
                        })
                    })
                })
            })
        })
            .then(data => { res.status(200).json(data) })
            .catch(next)
    })
}