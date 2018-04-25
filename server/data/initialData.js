const Sequelize = require('sequelize');
const db = require("../models");

const employee = require("./empl.js");
const dpt = require("./dpt.js");
const dept_manager = require("./dept_manager.js");
const dept_emp = require("./dept_emp.js");
const title = require("./title.js");
const salary = require("./salary.js");

let letInitiate = () => {
    // We could use Sequelize 'transaction' to avoid to build some 'table' but not some other. However, 
    //    (only for development purpose only) by using this (dump) way, we could get error's message
    //    corresponding to the 'table' that had problem, it's easier to see the errors ...
    db.employee.findAll()
        .then(data => {
            if (data.length == 0) {
                db.employee.bulkCreate(employee)
                    .then(data => { 
                        db.department.bulkCreate(dpt)
                            .then(data => { 
                                db.dept_manager.bulkCreate(dept_manager)
                                    .then(data => { 
                                        db.dept_emp.bulkCreate(dept_emp)
                                            .then(data => { 
                                                db.salary.bulkCreate(salary)
                                                    .then(data => { 
                                                        db.title.bulkCreate(title)
                                                            .then(data => { 
                                                                console.log("Initiation: Perfect!")
                                                            })
                                                            .catch(err => console.log("Could not initiate 'title', err: " + err))
                                                    })
                                                    .catch(err => console.log("Could not initiate 'salary', err: " + err))
                                            })
                                            .catch(err => console.log("Could not initiate 'dept_emp', err: " + err))
                                    })
                                    .catch(err => console.log("Could not initiate 'dept_manager', err: " + err))
                            })
                            .catch(err => console.log("Could not initiate 'department', err: " + err))
                    })
                    .catch(err => console.log("Could not initiate 'employee', err: " + err))
            } // check DB: if initiated, do nothing ...
        })

};

module.exports = letInitiate;