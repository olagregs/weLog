import { dataSource } from '../database';
import { Compliments } from '../entities/Compliment';
import { Tag } from '../entities/Tag';
import { User } from '../entities/User';

interface ICreateCompliments {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
}

class CreateComplimentsService {
  async create({ user_sender, user_receiver, tag_id, message }: ICreateCompliments) {
    const tagsRepository = dataSource.getRepository(Tag);
    const usersRepository = dataSource.getRepository(User);
    const repository = dataSource.getRepository(Compliments);

    if (!user_sender || !user_receiver) {
      throw new Error("Please provide de user id");
    }

    if (user_sender == user_receiver) {
      throw new Error("You cannot make a compliment to yourself");
    }

    if (!tag_id) {
      throw new Error("Please provide tag id");
    }

    const userSenderExists = await usersRepository.findOne({
      where: { id: user_sender }
    });


    const userReceiverExists = await usersRepository.findOne({
      where: { id: user_receiver }
    });

    if (!userSenderExists || !userReceiverExists) {
      throw new Error("Invalid user");
    }

    const tagExists = await tagsRepository.findOne({
      where: { id: tag_id }
    });

    if (!tagExists) {
      throw new Error("Invalid tag")
    }

    const compliment = repository.create({
      user_sender,
      user_receiver,
      tag_id,
      message
    });

    await repository.save(compliment);

    return compliment;
  }
}

export { CreateComplimentsService }