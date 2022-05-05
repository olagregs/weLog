import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

function ensureAuthentication(request: Request, response: Response, next: NextFunction) {
  const JWTToken = request.headers.authorization;

  const [, token] = JWTToken.split(" ");

  try {
    verify(token, process.env.SECRET_KEY);

    next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid Token, please re-authenticate!"
    });
  }
}

export { ensureAuthentication }