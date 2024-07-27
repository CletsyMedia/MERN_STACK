import jwt from 'jsonwebtoken';

// Adding userId as payload to the token
const genToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  // Saving in cookies
  res.cookie('jwt', token, {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    // maxAge: 30 * 24 * 60 * 60 * 1000,
  });
}

export default genToken;