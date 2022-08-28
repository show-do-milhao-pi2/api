import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../../repositories/UserRepository";
import { IGetByNicknameUserService } from "./IGetByNicknameUserService";

class GetByNicknameUserService implements IGetByNicknameUserService {
  async execute(nickname: string) {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne({
      where: [{ nickname: nickname }] /* relations */
    });

    return user;
  }
}

export { GetByNicknameUserService };
