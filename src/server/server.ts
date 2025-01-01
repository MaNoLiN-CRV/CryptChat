import WebSocket from 'ws';
import WebSocketConfig from '../config/webSocketConfig';

export const webSocketServer = new WebSocket.Server({ port: WebSocketConfig.PORT });

