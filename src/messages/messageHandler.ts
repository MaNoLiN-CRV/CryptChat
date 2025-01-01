import { WebSocket } from "ws";
import { webSocketServer } from "../server/server";
import { encrypt } from "../encryption/encryption";
import { addToCache } from "./cache";
import { shutdownServer } from "../server/commandsExecutor";
import  MessageOperations  from "../database/messageCRUD";
import WebSocketConfig from "../config/webSocketConfig";

const MessageOperationsInstace = new MessageOperations();

export const messageHandler = (ws: WebSocket) => {
    ws.on('message', (message) => {
        webSocketServer.emit('message', message); // Broadcast to all clients
        let encrypted = encrypt(message.toString());
        addToCache(encrypted); // Add the message to the cache
        
    })

    ws.on('initialMessages', () => {
        ws.emit('initialMessages', MessageOperationsInstace.getLastNMessages(WebSocketConfig.initialMessagesLoading)); // Send the initial messages to the client
    })

    ws.on('shutdownServer', () => {
        sendServerMessage('Server shutting down...');
        shutdownServer(); // Emergency shutdown (all the messages will be lost)
    })

}


const sendServerMessage = (message: string) => {
    webSocketServer.emit('serverMessage', message); // Broadcast to all clients
}