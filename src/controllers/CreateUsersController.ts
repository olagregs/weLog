import { Request, Response } from 'express';

import { CreateUsersService } from '../services/CreateUsersService';

class CreateUsersController {
  async create(request: Request, response: Response) {
    const { name, admin, email, password } = request.body;

    const service = new CreateUsersService();

    const user = await service.create({ name, admin, email, password });

    return response.status(201).json(user);
  }
}

export { CreateUsersController }