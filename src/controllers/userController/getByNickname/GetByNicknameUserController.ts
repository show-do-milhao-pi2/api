import { classToPlain } from "class-transformer";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { GetByNicknameUserService } from "../../../services/userServices/getByNickname/GetByNicknameUserService";

import { Fail } from "../../../entities/Error";

class getByNicknameController {
  async handle(req: Request, res: Response) {
    const nickname = req.params.nickname;

    const getUserService = new GetByNicknameUserService();
    const response = await getUserService.execute(nickname);

    if (!response) throw new Fail(404, `Couldn't find an User with nickname ${nickname}`);

    return res.status(200).json({
      status: true,
      data: classToPlain(response),
    });
  }
}

export { getByNicknameController };
