export default interface Message {
    id: number;
    username: string;
    encryptedMessage: string;
    timestamp: Date;
}