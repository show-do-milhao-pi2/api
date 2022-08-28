import { User } from "../../../entities/User";

export interface IUpdateUserService {
  execute(data: User): Promise<User>;
}
