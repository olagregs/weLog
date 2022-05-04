import { Request, Response } from 'express';
import { CreateComplimentsService } from '../services/CreateComplimentsService';

class CreateComplimentsController {
  async create(request: Request, response: Response) {
    const { user_sender, user_receiver, tag_id, message } = request.body;

    const service = new CreateComplimentsService();

    const compliment = await service.create({
      user_sender,
      user_receiver,
      tag_id,
      message
    });

    return response.status(201).json(compliment);
  }
}

export { CreateComplimentsController }