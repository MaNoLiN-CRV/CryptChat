import crypto from 'crypto';

/**
 * Generates a random 16-byte initialization vector (IV)
 * @returns 
 */
const generateIv = () => {
    return crypto.randomBytes(16);
}

/**
 * Generates a random 32-byte key.
 * @returns {Buffer} The generated key.
 */
const generateKey = (): Buffer => {
    return crypto.randomBytes(32);
}

export { generateIv, generateKey }