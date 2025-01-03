import * as forge from 'node-forge';

/**
 * Encrypts an AES key using RSA public key encryption.
 * @param aesKey - The AES key to be encrypted.
 * @param rsaPublicKey - The RSA public key used for encryption.
 * @returns The encrypted AES key.
 */
const encryptAESKey = (aesKey: Buffer, rsaPublicKey: string): string => {
    const publicKeyForge = forge.pki.publicKeyFromPem(rsaPublicKey);
    const encryptedKey = publicKeyForge.encrypt(aesKey.toString('binary'), 'RSA-OAEP');
    return forge.util.encode64(encryptedKey);
}