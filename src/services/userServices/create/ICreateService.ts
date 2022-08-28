import { User } from "../../../entities/User";

export interface ICreateService {
  execute(data: User): Promise<User>;
}
