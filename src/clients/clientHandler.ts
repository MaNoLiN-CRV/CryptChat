import WebSocketConfig from "../config/webSocketConfig";
import MessageOperations from "../database/messageCRUD";
import { getFromCache } from "../messages/cache";
import { messageHandler } from "../messages/messageHandler";
import { webSocketServer } from "../server/server";
import { WebSocket } from "ws";


export const wsGroups = new Map<string, WebSocket[]>();


interface joinData {
    jwt: string;
    group: string;
    username: string;
}

webSocketServer.on('connection', (ws: WebSocket) => {
    ws.on('join' , ({ jwt, group , username}: joinData) => {
        if(!validateConnection(ws , jwt)) return;
        
    


    })
    ws.on('close', () => {
        
        ws.close();
    })
});

const validateConnection = (ws: WebSocket, jwt: string): boolean => {
    if (false) {  // TODO : Validate the jwt 
        ws.terminate();
    }
    return true;
}

const validateJoinGroup = (ws:WebSocket, { group , jwt , username}: joinData): boolean => {
    // If the jwt username payload is the same as the client username and the jwt is valid and the user belongs to the group (database)


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
