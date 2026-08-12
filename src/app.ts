import { envs } from "./config";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(() => {
  main();
})();

async function main() {
  // TODO: conexión a base de datos
  // TODO: inicio de nuestro server

  new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  }).start();
}
