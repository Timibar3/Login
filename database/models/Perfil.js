module.exports = (sequelize, DataTypes) => {
    let alias = 'Perfil';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        perfil_name: {
            type: DataTypes.STRING,
            allowNull: false 
        }
    }
    let config = {
        freezeTableName: true,
        tableName: 'perfiles',
        timestamps: false
    }
    const Perfiles = sequelize.define(alias, cols, config);

    Perfiles.associate = function(models){
        Perfiles.hasMany(models.User, {
            as: 'users',
            foreignKey: 'perfil_id'
        });
    }

    return Perfiles;
}