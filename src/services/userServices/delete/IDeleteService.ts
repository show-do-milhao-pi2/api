import { User } from "../../../entities/User";

export interface IDeleteService {
  execute(id: string): Promise<User>;
}
