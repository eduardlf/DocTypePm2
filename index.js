"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "dbmysql-container",
    port: 3306,
    username: "root",
    password: "pass",
    database: "basedados",
    synchronize: false
});
function setConexao() {
    return __awaiter(this, void 0, void 0, function* () {
        yield AppDataSource.initialize()
            .then(() => {
            console.log("Data Source has been initialized!");
        })
            .catch((err) => {
            console.error("Error during Data Source initialization", err);
        });
    });
}
function Log(texto) {
    const date = new Date();
    let log = '[' + date.toTimeString() + ']';
    console.log(log + '::::' + texto);
}
function cron(param) {
    return __awaiter(this, void 0, void 0, function* () {
        const cla = new teste();
        let a = 0;
        var CronJob = require('cron').CronJob;
        var job = new CronJob('*/5 * * * * *', function () {
            return __awaiter(this, void 0, void 0, function* () {
                if (a == 0) {
                    yield setConexao();
                    a = 1;
                }
                yield cla.run(param);
            });
        }, null, true, 'America/Los_Angeles');
        job.start();
    });
}
class cliente {
}
class teste {
    run(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            Log('cliente: ' + cliente);
            Log('inicio da sincronizacao');
            const dados = yield AppDataSource.manager.query("SELECT * FROM cliente");
            console.log(dados);
            Log('fim da sincronizacao');
        });
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
