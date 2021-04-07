module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }
    let config = {
        freezeTableName: true,
        tableName: "users",
        timestamps: false
    }
    const Users = sequelize.define(alias, cols, config);

    return Users;
}