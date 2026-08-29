import { Validators } from "../../../config";

/**
 * DTO utilizado para iniciar sesión un usuario.
 */
export class LoginUserDto {
  /**
   * Crea una nueva instancia de LoginUserDto.
   *
   * @param email Correo electrónico del usuario.
   * @param password Contraseña del usuario.
   */
  private constructor(
    public email: string,
    public password: string,
  ) {}

  /**
   * Valida y crea un LoginUserDto a partir de un objeto.
   *
   * @param object Datos del usuario que se desean validar.
   * @returns Una tupla con el mensaje de error o el DTO creado.
   */
  static sigin(object: { [key: string]: any }): [string?, LoginUserDto?] {
    const { email, password } = object;

    if (!email) return ["Missing email"];
    if (!Validators.email.test(email)) return ["Email is not valid"];
    if (!password) return ["Missing password"];
    if (password.length < 6) return ["Password too short"];

    return [undefined, new LoginUserDto(email, password)];
  }
}
