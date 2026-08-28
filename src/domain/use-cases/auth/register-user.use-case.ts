import { JwtAdapter } from "../../../config";
import { RegisterUserDto } from "../../dtos/auth/register-usert.dto";
import { CustomError } from "../../errors/custom.error";
import { AuthRepository } from "../../repositories/auth.repository";

interface UserToken {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

type SignToken = (payload: object, duration?: number) => Promise<string | null>;
interface RegisterUserUseCase {
  execute(registerUSerDto: RegisterUserDto): Promise<UserToken>;
}

export class RegisterUser implements RegisterUserUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignToken = JwtAdapter.generateToken,
  ) {}
  async execute(registerUSerDto: RegisterUserDto): Promise<UserToken> {

    // crear usuario
    const user = await this.authRepository.register(registerUSerDto);

    // Token
    const token = await this.signToken({ id: user.id }, 2);
    if (!token) throw CustomError.internalServer("Error Generating token");

    return {
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}
