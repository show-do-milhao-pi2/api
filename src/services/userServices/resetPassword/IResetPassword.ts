import { User } from "../../../entities/User";

export interface IResetPassword {
  execute(
    email: string,
    newPassword: string
  ): Promise<User>;
}
