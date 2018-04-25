module.exports = function (sequelize, Sequelize) {
    const Employee = sequelize.define("employee", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        birth_date: {
            type: Sequelize.DATE,
            validate: {
                notEmpty: true,
            }
        },
        first_name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
        last_name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
        gender: {
            type: Sequelize.ENUM,
            values: ['M', 'F'],
            validate: {
                notEmpty: true,
            }
        },
        hire_date: {
            type: Sequelize.DATE,
        }
    });

    return Employee;
}