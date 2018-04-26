module.exports = function (sequelize, Sequelize) {
    const Dept_manager = sequelize.define("dept_manager", {
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

    return Dept_manager;
}