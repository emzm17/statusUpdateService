import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { sequelize } from '../config/databaseConfig.js'; // Adjust the path to your database configuration
import { Language } from '../models/language.js';
class Submission extends Model { }

Submission.init({
    id: {
        type: DataTypes.STRING,
        defaultValue: uuidv4,
        primaryKey: true,
    },
    sourceCode: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    languageId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Language', // Name of the language model/table
            key: 'id',
        },
    },
    status: {
        type: DataTypes.ENUM('QUEUED', 'RUNNING', 'COMPLETED', 'ERROR'), // Replace with your actual statuses
        allowNull: false,
    },
    result: {
        type: DataTypes.TEXT,
    },
}, {
    sequelize,
    modelName: 'Submission',
    tableName: 'submissions',
    timestamps: false
});

// Association with the Language model
Submission.belongsTo(Language, { foreignKey: 'language_id', as: 'Language' });

export { Submission };