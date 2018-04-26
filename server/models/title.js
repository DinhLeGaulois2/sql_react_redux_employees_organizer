module.exports = function (sequelize, Sequelize) {
    const Title = sequelize.define("title", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type: Sequelize.STRING
        },
        from_date: {
            type: Sequelize.DATE
        },
        to_date: {
            type: Sequelize.DATE
        }
    });

    return Title;
}