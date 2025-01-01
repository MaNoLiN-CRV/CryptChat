import WebSocketConfig from "../config/webSocketConfig";
import Message from "../database/entities/message";
import MessageOperations from "../database/messageCRUD";

const cache = new Array<Message>(); // This cache is to avoid overloading the database

export const addToCache = (message: Message) => {
    cache.push(message);
    if(cache.length >= WebSocketConfig.maxMessageCache) {
        MessageOperations.saveMessages(cache);
        cache.length = 0; // Clear the cache
    }
}
/**
 * @returns The cache
 */
export const getFromCache = () => {
    return Object.assign({}, cache); // Create a copy of the cache to prevent modification
}