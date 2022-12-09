import { CronJob } from "cron";
import pm2, { ProcessDescription, StartOptions } from "pm2";
import { forkJoin, lastValueFrom, Observable } from "rxjs";
import { NodeDataSource } from "../../database/nri_database";
import Cron, { TimeCron } from "../../models/entity_nri/Cron";
import { Conexao } from "../../Shared/Conexao";


interface ReturnStart {
    pm_id: number,
    name: string
}

function iniciarPm2(service: StartOptions): Observable<ReturnStart> {
    return new Observable(
        (subscriber) => pm2.start(service, (err, proc) => {
            if (err) {
                subscriber.error(err);
            } else {
                const result: ReturnStart = {
                    name: proc[0].pm2_env.name,
                    pm_id: proc[0].pm2_env.pm_id
                }
                subscriber.next(result);
                subscriber.complete();
            }
        })
    );
}

function deletarPm2(service: number | string): Observable<boolean> {
    return new Observable(
        (subscriber) => pm2.delete(service, (err, proc) => {
            if (err) {
                subscriber.error(err);
            } else {
                subscriber.next(true);
                subscriber.complete();
            }
        })
    );
}

async function listPm2(): Promise<ProcessDescription[]> {
    return await lastValueFrom(new Observable(
        (subscriber) => pm2.list((err, proc) => {
            if (err) {
                subscriber.error(err);
            } else {
                subscriber.next(proc);
                subscriber.complete();
            }
        })
    ));
}

async function funCron() {

    await Conexao.iniciarConexao();

    let sincronizadores = new Array<Observable<boolean|ReturnStart>>();
    const listCron = await NodeDataSource.manager.getRepository(Cron).findBy({ativo: true});
    const lisPm2Cron = await listPm2();
    
    let bancodifference = listCron.filter(cron => lisPm2Cron.find((pm2Cron)=>pm2Cron.name ==  cron.nome) == undefined);
    let pm2difference = lisPm2Cron.filter(pm2Cron => listCron.find((cron)=>cron.nome ==  pm2Cron.name) == undefined);
    
    bancodifference.forEach((cron)=>{
        //iniciar 
        let servicePm2: StartOptions = {
            name: cron.nome,
            script: './dist/server/sincronizador/index.js',
            max_restarts: 5
        }
        sincronizadores.push(iniciarPm2(servicePm2));
    });

    pm2difference.forEach((cron)=>{
        //fechar
        if(cron.name.match(/.+_[0-9]+_eve/)){
            sincronizadores.push(deletarPm2(cron.name));
        }
    });

    if(sincronizadores.length > 0){
        await lastValueFrom(forkJoin(sincronizadores));
    }
}

function startCron() {
    var job = new CronJob('*/15 * * * * *', funCron, null, true, 'America/Sao_Paulo');
    job.start()
}

startCron();