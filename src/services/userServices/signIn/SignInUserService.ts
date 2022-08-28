import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../../repositories/UserRepository";
import { ISignInUserRequest, ISignInUserService } from "./ISignInUserService";

import { Fail } from "../../../entities/Error";

class SignInUserService implements ISignInUserService {
  async execute({ nickname, password, encrypter, tokenGenerator }: ISignInUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ nickname });

    if (!user || !(await encrypter.compare(password, user.password))) {
      throw new Fail(401, "Email/Password incorrect");
    }
    const token = tokenGenerator.generate({ key: nickname, expirationInMs: 604800000  })

    return token;
  }
}

export { SignInUserService };
