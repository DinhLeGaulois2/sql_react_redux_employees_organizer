module.exports = function (sequelize, Sequelize) {
    const Department = sequelize.define("department", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
    });

    return Department;
}