import { Validators } from "../../../config";

/**
 * DTO utilizado para registrar un nuevo usuario.
 */
export class RegisterUserDto {
  /**
   * Crea una nueva instancia de RegisterUserDto.
   *
   * @param name Nombre del usuario.
   * @param email Correo electrónico del usuario.
   * @param password Contraseña del usuario.
   */
  private constructor(
    public name: string,
    public email: string,
    public password: string,
  ) {}

  /**
   * Valida y crea un RegisterUserDto a partir de un objeto.
   *
   * @param object Datos del usuario que se desean validar.
   * @returns Una tupla con el mensaje de error o el DTO creado.
   */
  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { name, email, password } = object;

    if (!name) return ["Missing name"];
    if (!email) return ["Missing email"];
    if (!Validators.email.test(email)) return ["Email is not valid"];
    if (!password) return ["Missing password"];
    if (password.length < 6) return ["Password too short"];

    return [undefined, new RegisterUserDto(name, email, password)];
  }
}
