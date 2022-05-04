import { Request, Response } from 'express';

import { AuthUserService } from '../services/AuthUserService';

class AuthUserController {
  async auth(request: Request, response: Response) {
    const { email, password } = request.body;

    const service = new AuthUserService();

    const token = await service.auth({ email, password });

    return response.status(200).json(token);
  }
}

export { AuthUserController }