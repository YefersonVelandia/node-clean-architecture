import { JwtAdapter } from "../../../config";
import { LoginUserDto } from "../../dtos/auth/login-user.dto";
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

interface LoginUserUseCase {
  login(loginUserDto: LoginUserDto): Promise<UserToken>;
}

export class LoginUser implements LoginUserUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignToken = JwtAdapter.generateToken,
  ) {}
  async login(loginUserDto: LoginUserDto): Promise<UserToken> {
    // Validar credenciales del usuario
    const user = await this.authRepository.login(loginUserDto);

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
