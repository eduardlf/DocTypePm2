import { setTimeout } from 'timers/promises'

function Log(texto: string){
    const date = new Date();
    let log = '['+date.toTimeString()+']';
    console.log(log+'::::'+texto)
}

class teste{
    public async run(cliente: string){

        Log('cliente: '+cliente);
        Log('inicio da sincronizacao');
        await setTimeout(2000);
        Log('fim da sincronizacao');
        
    }
}

var CronJob = require('cron').CronJob;
var job = new CronJob('*/10 * * * * *',async function() {
        const parameter = process.argv;
        let lastElement = parameter.slice(-1);
        const cla = new teste();
        await cla.run(lastElement[0]);
	},
	null,
	true,
	'America/Los_Angeles'
);

job.start()
