import WebSocketConfig from "../config/webSocketConfig";

const cache = new Array<string>(); // This cache is to avoid overloading the database

export const addToCache = (message: string) => {
    cache.push(message);
    if(cache.length >= WebSocketConfig.maxMessageCache) {
        // Save the messages to the database and clear the cache
        cache.length = 0; // Clear the cache
    }
}
/**
 * @returns The cache
 */
export const getFromCache = () => {
    return Object.assign({}, cache); // Create a copy of the cache to prevent modification
}