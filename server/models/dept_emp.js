module.exports = function (sequelize, Sequelize) {
    const Dept_emp = sequelize.define("dept_emp", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        from_date: {
            type: Sequelize.DATE
        },
        to_date: {
            type: Sequelize.DATE
        }
    });

    return Dept_emp;
}