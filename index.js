import { sequelize } from './config/databaseConfig.js';
import { processTask } from './processor/subscriber.js';
import { update } from './service/submissionService.js'
import { UPDATE_RESULT } from './config/serverConfig.js';



sequelize.authenticate()
    .then(() => {
        console.log('Database connected successfully!');
        processTask(UPDATE_RESULT, handleTask);

    })
    .catch(err => {
        console.error('Database connection failed:', err);
        process.exit(1); // Exit process if DB connection fails
    });

const handleTask = (task) => {
    console.log('Processing task:', task);
    update(task.id, task.status, task.result);
};
