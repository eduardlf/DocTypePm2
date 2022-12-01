import "reflect-metadata"
import { setTimeout } from 'timers/promises'
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "dbmysql-container",
    port: 3306,
    username: "root",
    password: "pass",
    database: "basedados",
    synchronize: false
});

async function setConexao() {
    await AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err)
        });
}

function Log(texto: string) {
    const date = new Date();
    let log = '[' + date.toTimeString() + ']';
    console.log(log + '::::' + texto)
}

async function cron(param: string) {
    const cla = new teste();

    let a = 0;

    var CronJob = require('cron').CronJob;
    var job = new CronJob('*/5 * * * * *', async function () {

        if(a == 0){
            await setConexao();
            a = 1;
        }

        await cla.run(param);
    },
        null,
        true,
        'America/Los_Angeles'
    );
    job.start()
}

class cliente {
    id_cliente: number | undefined;
    Nome: string | undefined;
}

class teste {
    public async run(cliente: string) {
       
        Log('cliente: ' + cliente);
        Log('inicio da sincronizacao');
        const dados:cliente[] = await AppDataSource.manager.query("SELECT * FROM cliente");
        console.log(dados);
        Log('fim da sincronizacao');
    }
}

// const parameter = process.argv;
// let lastElement = parameter.slice(-1);

// console.log(lastElement[0]);
// console.log(lastElement[0].search(/cron.+/));
// let crom: boolean = lastElement[0].search(/cron.+/) == 0;

// if (crom) {
    cron('teste');
// } else {
    // async function test() {
        // const cla = new teste();
        //  cla.run(lastElement[0]);
    // }

    // test();
    // process.exit();
// }
