import Message from "./message";
import User from "./user";

export default interface Conversation {
    id: string;
    members: User[];
    messages: Message[];
}