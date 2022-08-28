import { getCustomRepository, Like } from "typeorm";
import { UserRepository } from "../../../repositories/UserRepository";
import { removeNullFields } from "../../../utils/removeNullFields";
import { classToPlain } from "class-transformer";
import {
  IFilterUserRequest,
  IFilterUserParamsRequest,
} from "./IFilterUserService";

class FilterUserService {
  async execute(data: IFilterUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const whereParams: IFilterUserParamsRequest = {
      name: data.name ? Like(`${String(data.name)}%`) : null,
      nickname: data.nickname ? String(data.nickname) : null,

    };

    const params: IFilterUserParamsRequest = removeNullFields(whereParams);

    const users = await userRepository.find({
      where: params,
    });
    return classToPlain(users);
  }
}

export { FilterUserService };
