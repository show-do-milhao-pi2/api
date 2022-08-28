import { Encrypter } from "../../../utils/encrypter/IEncrypter";
import { TokenGenerator } from "../../../utils/token/IToken";
export interface ISignInUserRequest {
    nickname: string;
    password: string;
    encrypter: Encrypter;
    tokenGenerator: TokenGenerator;
};

export interface ISignInUserService {
    execute({ nickname, password, encrypter, tokenGenerator }: ISignInUserRequest): Promise<any>;
};