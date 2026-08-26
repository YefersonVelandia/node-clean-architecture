import jwt, { SignOptions } from "jsonwebtoken";

export class JwtAdapter {
  static async generateToken(
    payload: object,
    duration: SignOptions["expiresIn"] = "2h",
  ): Promise<string | null> {
    return new Promise((resolve) => {
      jwt.sign(payload, "SEED", { expiresIn: duration }, (err, token) => {
        if (err) return resolve(null);

        resolve(token ?? null);
      });
    });
  }

  static validateToken(token: string) {
    return new Promise((resolve) => {
      jwt.verify(token, "SEED", (err, decoded) => {
        if (err) return resolve(null);

        resolve(decoded);
      });
    });
  }
}
