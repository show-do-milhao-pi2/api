import { getCustomRepository } from "typeorm";

import { User } from "../../../entities/User";
import { UserRepository } from "../../../repositories/UserRepository";

class UpdateUserService {
  async execute(data: User) {
    const userRepository = getCustomRepository(UserRepository);
    return userRepository.save({
      ...data,
    });
  }
}

export { UpdateUserService };
