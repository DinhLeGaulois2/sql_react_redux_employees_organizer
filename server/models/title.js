module.exports = function (sequelize, Sequelize) {
    const Title = sequelize.define("title", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type: Sequelize.STRING,
            primaryKey: true
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

    return Title;
}