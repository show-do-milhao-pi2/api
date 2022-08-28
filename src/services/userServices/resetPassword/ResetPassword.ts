import { hash } from "bcrypt";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../../repositories/UserRepository";
import { IResetPassword } from "./IResetPassword";

import { Fail } from "../../../entities/Error";

export class ResetPassword implements IResetPassword {
  async execute(nickname: string, newPassword: string) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ nickname });

    if (!user) throw new Fail(404, "Couldn't find an User");

    user.password = await hash(newPassword, 10);

    const response = userRepository.save({ ...user });

    return response;
  }
}
