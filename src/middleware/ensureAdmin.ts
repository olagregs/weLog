import { Request, Response, NextFunction } from 'express';
import { decode } from 'jsonwebtoken';

import { dataSource } from '../database';
import { User } from '../entities/User';

async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const code = request.headers.authorization;

  const [, token] = code.split(" ");

  const { sub } = decode(token, {
    json: true
  });

  const repository = dataSource.getRepository(User);

  const { admin } = await repository.findOne({
    where: { id: sub }
  });

  if (!admin) {
    return response.status(401).json({
      message: "Unauthorized"
    });
  }

  next();
}

export { ensureAdmin }