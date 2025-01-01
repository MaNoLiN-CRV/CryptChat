import { getFromCache } from "../messages/cache";
import { messageHandler } from "../messages/messageHandler";
import { webSocketServer } from "../server";
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
const getInitialMessages = () => {
    let messages = new Array<string>();
    // TODO : Get initial messages from the database
    messages.concat(getFromCache());
    return messages;
}
