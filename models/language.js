import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/databaseConfig.js';

class Language extends Model { }

Language.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    version: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Language',
    tableName: 'languages',
});

export { Language };
