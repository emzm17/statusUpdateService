import { redisSubscriber, connectToRedis } from '../config/redisConfig.js';

export const processTask = async (channelName, taskHandler) => {
    try {
        await connectToRedis(); // Ensure Redis is connected

        console.log(`Subscribing to channel: ${channelName}`);

        redisSubscriber.subscribe(channelName, (message) => {
            try {
                const task = JSON.parse(message);
                taskHandler(task); // Process the task
            } catch (parseError) {
                console.error('Failed to parse task:', parseError);
            }
        });

    } catch (error) {
        console.error('Error setting up subscriber:', error);
    }
};
