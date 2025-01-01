import { Db, Collection } from 'mongodb';
import Message  from './entities/message'; 
import client from './database'; 

const dbName = 'messages';
const collectionName = 'messages';

class MessageOperations {
    private  db: Db;
    private collection: Collection<Message>;

    constructor() {
        this.db = client.db(dbName);
        this.collection = this.db.collection(collectionName);
    }

    async createMessage(message: Message): Promise<void> {
        await this.collection.insertOne(message);
    }

    async readMessage(id: number): Promise<Message | null> {
        return await this.collection.findOne({ id: id });
    }

    async updateMessage(id: number, message: Partial<Message>): Promise<void> {
        await this.collection.updateOne({ id: id}, { $set: message });
    }

    async deleteMessage(id: number): Promise<void> {
        await this.collection.deleteOne({ id: id });
    }


    /**
     * Returns the last n messages.
     * @param n The number of messages to retrieve.
     * @returns An array of messages sorted by timestamp in descending order.
     */
    async getLastNMessages(n: number): Promise<Message[]> {
        return await this.collection.find().sort({ timestamp: -1 }).limit(n).toArray();
    }

    
    /**
     * Retrieves all messages from the database.
     * @returns An array of messages sorted by timestamp in descending order.
     */
    async getAllMessages(): Promise<Message[]> {
        return await this.collection.find().sort({ timestamp: -1 }).toArray();
    }


    
    /**
     * Deletes all messages from the database.
     * This operation will remove all documents from the collection.
     */
    async deleteAllMessages(): Promise<void> {
        await this.collection.deleteMany({});
    }
}


