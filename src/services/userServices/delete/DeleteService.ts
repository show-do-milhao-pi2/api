import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../../repositories/UserRepository";
import { IDeleteService } from "./IDeleteService";

export class DeleteService implements IDeleteService {
  async execute(id: string) {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne({ id: id });

    await userRepository.save({ ...user });

    return user;
  }
}
