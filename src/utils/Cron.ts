import Log from "./Log";

export default class Cron{


    async cron(param: string) {
        let a = 0;
    
        var CronJob = require('cron').CronJob;
        var job = new CronJob('*/5 * * * * *', async function () {

            Log.info('aaa');
    
            if(a == 0){
                a = 1;
            }
            
        },
            null,
            true,
            'America/Los_Angeles'
        );
        job.start()
    }

}

// const parameter = process.argv;
// let lastElement = parameter.slice(-1);

// console.log(lastElement[0]);
// console.log(lastElement[0].search(/cron.+/));
// let crom: boolean = lastElement[0].search(/cron.+/) == 0;

// if (crom) {
// } else {
    // async function test() {
        // const cla = new teste();
        //  cla.run(lastElement[0]);
    // }

    // test();
    // process.exit();
// }