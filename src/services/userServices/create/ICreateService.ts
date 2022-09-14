import { User } from "../../../entities/User";
import { Encrypter } from "../../../utils/encrypter/IEncrypter";

export interface ICreateService {
  execute(data: User, encrypter: Encrypter): Promise<User>;
}
