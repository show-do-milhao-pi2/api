import { SignInUserController } from "./signIn/SignInUserController";
import { CreateController } from "./create/CreateController";
import { DeleteUserController } from "./delete/DeleteUserController";
import { UpdateUserController } from "./update/UpdateUserController";
import { getByNicknameController } from "./getByNickname/GetByNicknameUserController";
import { FilterUserController } from "./filter/FilterUserController";

const getNicknameController = new getByNicknameController().handle;
const signInController = new SignInUserController().handle;
const createController = new CreateController().handle;
const deleteController = new DeleteUserController().handle;
const updateController = new UpdateUserController().handle;
const filterController = new FilterUserController().handle;

export const controllers = {
  createController,
  signInController,
  deleteController,
  filterController,
  updateController,
  getNicknameController,
};
