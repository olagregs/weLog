import { Request, Response, NextFunction } from 'express';

function errorHandler(err: Error, request: Request, response: Response, next: NextFunction) {
  if (err) {
    return response.status(400).json({
      message: err.message
    });
  }

  return response.status(500).json({
    message: 'Internal Server Error'
  });
}

export { errorHandler }