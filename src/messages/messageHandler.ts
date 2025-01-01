import { WebSocket } from "ws";
import { webSocketServer } from "../server";
import { encrypt } from "../encryption/encryption";
import { addToCache } from "./cache";
export const messageHandler = (ws: WebSocket) => {
    ws.on('message', (message) => {
        webSocketServer.emit('message', message); // Broadcast to all clients
        let encrypted = encrypt(message.toString());
        addToCache(encrypted); // Add the message to the cache
        
    })

}