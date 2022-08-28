import { UserRepository } from "../../../repositories/UserRepository";
import { getCustomRepository } from "typeorm";
import { User } from "../../../entities/User";
import { ICreateService } from "./ICreateService";

export class CreateService implements ICreateService {
  async execute(data: User) {
    const userRepository = getCustomRepository(UserRepository);

    const user = userRepository.create(data);

    return await userRepository.save(user);
  }
}
