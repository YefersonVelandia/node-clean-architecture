import { Router } from "express";

export class AuthRoutes {
  constructor() {}

  static get routes(): Router {
    const router = Router();

    router.post("/login", (req, res) => {
      res.json("Login");
    });

    router.post("/register", (req, res) => {
      res.json("Register sucessfull");
    });

    return router;
  }
}
