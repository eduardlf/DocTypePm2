import { Sincronizador } from "./sincronizador";

async function start(){
    const ini = new Sincronizador();
    await ini.view();
    process.exit();
}

start();