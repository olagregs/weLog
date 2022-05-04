import { dataSource } from "../database";
import { User } from "../entities/User";

import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthUser {
  email: string;
  password: string;
}

class AuthUserService {
  async auth({ email, password }: IAuthUser) {
    const usersRepository = dataSource.getRepository(User);

    if (!email || !password) {
      throw new Error("Please, provide an email and password");
    }

    const emailValidation = await usersRepository.findOne({
      where: { email }
    });

    if (!emailValidation) {
      throw new Error("Invalid email or password");
    };

    const passwordValidation = await compare(password, emailValidation.password);

    if (!passwordValidation) {
      throw new Error("Invalid email or password");
    }

    const token = sign({
      email: emailValidation.email,
    }, 'f3ae88a53aa11d58a77c6246680d0dd7', {
      subject: emailValidation.id,
      expiresIn: '1d'
    });

    return token;
  }
}

export { AuthUserService }