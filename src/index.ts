import { Sincronizador } from "./utils/Sincronizador";

async function start() {
    const ini = new Sincronizador();
    await ini.view();
    process.exit();
}

start();