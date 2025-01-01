import mongoDB from 'mongodb';
import { DB_URL } from '../environment/environmentManager';

const client = new mongoDB.MongoClient(DB_URL || '');

export default client;