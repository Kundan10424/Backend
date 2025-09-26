import crypto from 'crypto';

 export const generateToken = () => {
    return crypto.randomBytes(16).toString('hex');
}

 export const varifyToken = (token) => {
    return token && token.length === 32;
}