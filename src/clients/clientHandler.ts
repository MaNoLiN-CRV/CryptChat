import WebSocketConfig from "../config/webSocketConfig";
import MessageOperations from "../database/messageCRUD";
import { getFromCache } from "../messages/cache";
import { messageHandler } from "../messages/messageHandler";
import { webSocketServer } from "../server/server";
import { WebSocket } from "ws";

let currentConnections = 0;

webSocketServer.on('connection', (ws) => {
    if (validateConnection(ws)) {
        messageHandler(ws); // Initialize the message handler
        ws.emit('initialMessages', getInitialMessages()); // Send the initial messages to the client
    }

    ws.on('close', () => {
        currentConnections--;
        ws.terminate();
    })
});

const validateConnection = (ws: WebSocket): boolean => {
    // TODO : Validate the jwt

    currentConnections++;
    return true;
}
/**
 * @returns The initial messages to send to the client
 */
const getInitialMessages = async () : Promise<string[]> => {
    const messages: string[] = [];
    const databaseMessages = await MessageOperations.getLastNMessages(WebSocketConfig.initialMessagesLoading);
    messages.push(...databaseMessages?.map(message => message.encryptedMessage));
    messages.push(...getFromCache().map(message => message.encryptedMessage));
    if(!messages) return [];
    return messages;
}
