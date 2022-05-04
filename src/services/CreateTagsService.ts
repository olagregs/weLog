import { dataSource } from "../database";
import { Tag } from "../entities/Tag";

class CreateTagsService {
  async create(name: string) {
    const repository = dataSource.getRepository(Tag);

    const tagAlreadyExists = await repository.findOne({
      where: { name }
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists");
    }

    const tag = repository.create({ name });

    await repository.save(tag);

    return tag;
  }
}

export { CreateTagsService }