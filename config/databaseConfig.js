import { Sequelize } from 'sequelize';
import { DB_NAME, DB_PASSWORD, DB_USER, DB_HOST, DB_DIALECT } from "./serverConfig.js";

export const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: DB_DIALECT,
        logging: false,
    }
);


