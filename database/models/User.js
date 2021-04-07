module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        perfil_id:{
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE 
        }

    }
    let config = {
        freezeTableName: true,
        tableName: "users",
        timestamps: false
    }
    const Users = sequelize.define(alias, cols, config);

    Users.associate = function(models) {
        Users.belongsTo(models.Perfil, {
            as: 'perfil',
            foreignKey: 'perfil_id'
        });
    }

    return Users;
}