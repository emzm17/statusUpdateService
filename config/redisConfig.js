import { REDIS_HOST } from "./serverConfig.js";
import { createClient } from "redis";

// Create Redis clients
export const redisSubscriber = createClient({ url: REDIS_HOST });

export async function connectToRedis() {
    try {
        if (!redisSubscriber.isOpen) {
            await redisSubscriber.connect();
            console.log(`Connected to Redis Subscriber`);
        }
    } catch (error) {
        console.error('Error connecting to Redis:', error);
        throw error;
    }
}

export async function disconnectFromRedis() {
    try {
        if (redisSubscriber.isOpen) {
            await redisSubscriber.disconnect();
            console.log('Disconnected Redis Subscriber.');
        }
    } catch (error) {
        console.error('Error disconnecting from Redis:', error);
    }
}
