module.exports = function (sequelize, Sequelize) {
    const Dept_emp = sequelize.define("dept_emp", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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

    return Dept_emp;
}