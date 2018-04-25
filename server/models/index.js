'use strict';

var conf = require('../../MY_PRIVATE_FOLDER/config_params')

// the Object from the library ...
var Sequelize = require('sequelize');

var db = {};

var DBInfo = {
    username: "root",
    password: conf.db_pwd,   // <----------------- Your Password here
    database: "employees_organizer",
    host: "127.0.0.1",
    dialect: "mysql",
};

var sequelize = new Sequelize(DBInfo.database, DBInfo.username, DBInfo.password, {
    host: DBInfo.host,
    dialect: DBInfo.dialect,
    logging: false,
    freezeTableName: true,
    operatorsAliases: false
});

db.sequelize = sequelize; // the library
db.Sequelize = Sequelize;

db.department = require('../models/department.js')(sequelize, Sequelize)
db.dept_emp = require('../models/dept_emp.js')(sequelize, Sequelize)
db.dept_manager = require('../models/dept_manager.js')(sequelize, Sequelize)
db.employee = require('../models/employee.js')(sequelize, Sequelize)
db.salary = require('../models/salary.js')(sequelize, Sequelize)
db.title = require('../models/title.js')(sequelize, Sequelize)

// n-m 
db.employee.hasMany(db.dept_manager, {foreignKey: 'emp_no'})
db.dept_manager.belongsTo(db.employee, {foreignKey: 'emp_no'})

db.dept_manager.belongsTo(db.department, {foreignKey: 'dept_no'})
db.department.hasMany(db.dept_manager, {foreignKey: 'dept_no'})

db.employee.hasMany(db.dept_emp, {foreignKey: 'emp_no'})
db.dept_emp.belongsTo(db.employee, {foreignKey: 'emp_no'})

db.dept_emp.belongsTo(db.department, {foreignKey: 'dept_no'})
db.department.hasMany(db.dept_emp, {foreignKey: 'dept_no'})

// 1-n
db.employee.hasMany(db.salary, {foreignKey: 'emp_no'})
db.salary.belongsTo(db.employee, {foreignKey: 'emp_no'})

db.employee.hasMany(db.title, {foreignKey: 'emp_no'})
db.title.belongsTo(db.employee, {foreignKey: 'emp_no'})

module.exports = db;