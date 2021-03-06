import bcrypt from 'bcryptjs';

import { dataSource } from '../database';
import { User } from '../entities/User';

interface ICreateUser {
  name: string;
  admin?: boolean;
  email: string;
  password: string;
}

class CreateUsersService {
  async create({ name, admin = false, email, password }: ICreateUser) {
    const repository = dataSource.getRepository(User);

    const userAlreadyExists = await repository.findOne({
      where: { email }
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const encryptPassword = await bcrypt.hash(password, 8);

    const user = repository.create({
      name,
      admin,
      email,
      password: encryptPassword
    });

    await repository.save(user);

    return user;
  }
}

export { CreateUsersService }