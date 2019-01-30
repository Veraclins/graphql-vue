import jwt from 'jsonwebtoken';

/**
 * @description An opinionated function for signing jwt tokens
 * @param payload the payload to be signed into the token
 * @param secret the secret key for signing and decoding the token
 * @param expiresIn the expiry duration: in milliseconds eg `84600`
 * or sting eg `1h`, `15d`, etc defaults to 72 hours if not supplied
 */
export const createToken = (
  payload: any,
  expiresIn?: string | number
): string => {
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret, {
    expiresIn: expiresIn || '72h',
  });
};

/**
 * @description An opinionated function for verifying jwt tokens
 * @param token the token to be verified
 * @return {object} object containing the decoded payload or error object
 */
export const verifyToken = (token: string): any => {
  const secret = process.env.JWT_SECRET;
  return jwt.verify(token, secret, (err: any, decoded: any) => decoded);
};
