const Sequelize = require('sequelize');
const models = require('../models') // DB's models
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });

const db = require("../models");

module.exports = function (app) {
    app.get("/api/get/department/:id", requireAuth, (req, res, next) => {
        db.department.findAll({
            where: { id: req.params.id },
            attributes: ['id', 'name'],
            include: [
                {
                    model: db.dept_manager,
                    attributes: ['id', 'employeeId']
                },
                {
                    model: db.dept_emp,
                    attributes: ['id', 'employeeId']
                }
            ]
        })
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/departments", requireAuth, (req, res, next) => {
        db.department.findAll({
            attributes: ['id', 'name'],
            include: [
                {
                    model: db.dept_manager,
                    attributes: ['id', 'employeeId']
                },
                {
                    model: db.dept_emp,
                    attributes: ['id', 'employeeId']
                }
            ]
        })
            .then(data => res.status(200).json(data))
            .catch(next)
    })

    app.get("/api/get/employee/:id", requireAuth, (req, res, next) => {
        db.employee.findAll({
            where: { id: req.params.id },
            attributes: ['id', 'birth_date', 'first_name', 'last_name', 'gender'],
            include: [
                {
                    model: db.salary,
                    attributes: ['salary']
                },
                {
                    model: db.title,
                    attributes: ['title']
                },
                {
                    model: db.dept_manager,
                    attributes: ['departmentId']
                },
                {
                    model: db.dept_emp,
                    attributes: ['departmentId']
                },
            ]
        })
            .then(data => {
                let result = {
                    employeeId: data[0].id,
                    birth_date: data[0].birth_date,
                    first_name: data[0].first_name,
                    last_name: data[0].last_name,
                    gender: data[0].gender,
                    salary: data[0].salaries[0].salary,
                    title: data[0].titles[0].title,
                    isManager: data[0].dept_managers.length == 0 ? false : true,
                }
                let dId = data[0].dept_managers.length == 0 ? data[0].dept_emps[0].departmentId : data[0].dept_managers[0].departmentId
                db.department.findAll({ where: { id: dId }, attributes: ['name'] })
                    .then(data => {
                        result.dpt_name = data[0].name
                        res.status(200).json(result)
                    })
                    .catch(next)
            })
            .catch(next)
    })

    app.get("/api/get/employees", requireAuth, (req, res, next) => {
        db.employee.findAll({
            attributes: ['id', 'birth_date', 'first_name', 'last_name', 'gender'],
            include: [
                {
                    model: db.salary,
                    attributes: ['salary']
                },
                {
                    model: db.title,
                    attributes: ['title']
                },
                {
                    model: db.dept_manager,
                    attributes: ['departmentId']
                },
                {
                    model: db.dept_emp,
                    attributes: ['departmentId']
                },
            ]
        })
        .then(data => {
            let result = []
            const oneByOne = (list) => {
                if (list.length) {
                    let aObj = list.shift()
                    let objC = {
                        employeeId: aObj.id,
                        birth_date: aObj.birth_date,
                        first_name: aObj.first_name,
                        last_name: aObj.last_name,
                        gender: aObj.gender,
                        salary: aObj.salaries[0].salary,
                        title: aObj.titles[0].title,
                        isManager: aObj.dept_managers.length == 0 ? false : true,
                    }
                    let dId = aObj.dept_managers.length == 0 ? aObj.dept_emps[0].departmentId : aObj.dept_managers[0].departmentId
                    db.department.findAll({ where: { id: dId }, attributes: ['name'] })
                        .then(data => {
                            objC.dpt_name = data[0].name
                            result.push(objC)
                            oneByOne(list)
                        })
                        .catch(next)
                }
                else{
                    res.status(200).json(result)
                } 
            }
            oneByOne([...data]);
        })
        .catch(next)
    })
}