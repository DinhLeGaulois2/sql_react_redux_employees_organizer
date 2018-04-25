module.exports = function (sequelize, Sequelize) {
    const Salary = sequelize.define("salary", {    
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },     
        salary: {
            type: Sequelize.INTEGER,
            validate: {
                notEmpty: true,
            }
        },
        from_date: {
            type: Sequelize.DATE,
            primaryKey: true
        },
        to_date: {
            type: Sequelize.DATE,
            primaryKey: true
        }
    });

    return Salary;
}