import { createCipheriv, createDecipheriv } from 'crypto';
import { generateKey ,  generateIv } from './keyGenerator';
const key = generateKey();
const iv = generateIv();
const cipher = createCipheriv('aes-256-cbc', key, iv);
const decipher = createDecipheriv('aes-256-cbc', key, iv);



export const encrypt = (text: string) => {
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};

export const decrypt = (text: string) => {
    let decrypted = decipher.update(text, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};
