import { WebSocket } from "ws";
import { webSocketServer } from "../server/server";
import { encrypt } from "../encryption/encryption";
import { addToCache } from "./cache";
import { shutdownServer } from "../server/commandsExecutor";
export const messageHandler = (ws: WebSocket) => {
    ws.on('message', (message) => {
        webSocketServer.emit('message', message); // Broadcast to all clients
        let encrypted = encrypt(message.toString());
        addToCache(encrypted); // Add the message to the cache
        
    })

    ws.on('shutdownServer', () => {
        sendServerMessage('Server shutting down...');
        
        shutdownServer(); // Emergency shutdown (all the messages will be lost)
    })

}


const sendServerMessage = (message: string) => {
    webSocketServer.emit('serverMessage', message); // Broadcast to all clients
}