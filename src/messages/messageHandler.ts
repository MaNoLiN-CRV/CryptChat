import { WebSocket } from "ws";
import { webSocketServer } from "../server/server";
import { addToCache } from "./cache";
import { shutdownServer } from "../server/commandsExecutor";
import  MessageOperations  from "../database/messageCRUD";
import Message from "../database/entities/message";
import WebSocketConfig from "../config/webSocketConfig";

const MessageOperationsInstace = new MessageOperations();

interface MessageData  { 
    username: string;
    message: string;
    timestamp: Date;
}


export const messageHandler = (ws: WebSocket) => {
    ws.on('message', ({ username, message, timestamp }: MessageData) => {
        

    });

    ws.on('shutdownServer', () => {
        sendServerMessage('Server shutting down...');
        shutdownServer(); // Emergency shutdown (all the messages will be lost)
    });
};


const sendServerMessage = (message: string) => {
    webSocketServer.emit('serverMessage', message); // Broadcast to all clients
}