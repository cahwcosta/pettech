import { UserRepository } from "@/repositories/pg/user.repository";
import { SignInUseCase } from "../signin";

export function makeSigninUseCase() {
  const userRepository = new UserRepository();

  const signinUseCase = new SignInUseCase(userRepository);

  return signinUseCase;
}
