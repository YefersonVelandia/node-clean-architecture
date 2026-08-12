export class Validators {
  /**
   * Valida si una cadena tiene un formato de correo electrónico válido.
   *
   * @param email Correo electrónico que se desea validar.
   * @returns `true` si el correo tiene un formato válido, `false` en caso contrario.
   */
  static get email() {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  }
}
