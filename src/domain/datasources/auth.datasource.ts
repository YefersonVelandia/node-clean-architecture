import { RegisterUserDto } from "../dtos/auth/register-usert.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class AuthDatasource {
  // todo:
  // abstract login()

  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}
