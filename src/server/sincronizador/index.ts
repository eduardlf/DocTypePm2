import { CronJob } from "cron";
import { Sincronizador } from "./services/Sincronizador";

async function start() {
    const ini = new Sincronizador();
    await ini.view();
}

function startCron() {
    var job = new CronJob('*/20 * * * * *', start, null, true, 'America/Sao_Paulo');
    job.start()
}

startCron();