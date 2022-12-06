import { Sincronizador } from "./utils/Sincronizador";
import Log from "./utils/Log";

async function cron(param: string) {
    const ini = new Sincronizador();
    var CronJob = require('cron').CronJob;
    var job = new CronJob('*/15 * * * * *', async function () {
        await ini.view();
    },
        null,
        true,
        'America/Los_Angeles'
    );
    job.start()
}

// const parameter = process.argv;
// let lastElement = parameter.slice(-1);

// console.log(lastElement[0]);
// console.log(lastElement[0].search(/cron.+/));
// let crom: boolean = lastElement[0].search(/cron.+/) == 0;

cron('');