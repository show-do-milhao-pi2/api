import { User } from "../../../entities/User";

export interface IGetByNicknameUserService {
  execute(nickname: string): Promise<User>;
}
