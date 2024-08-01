import jwt from "jsonwebtoken";

const decodeJWT = (token) => {
  try {
    const decoded = jwt.decode(token);
    return decoded;
  } catch (err) {
    console.error('Failed to decode JWT:', err);
    return null;
  }
};

export default decodeJWT;
