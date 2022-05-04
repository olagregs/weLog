import { Request, Response } from 'express';

import { CreateTagsService } from '../services/CreateTagsService';

class CreateTagsController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    const service = new CreateTagsService();

    const tag = await service.create(name);

    return response.status(201).json(tag);
  }
}

export { CreateTagsController }