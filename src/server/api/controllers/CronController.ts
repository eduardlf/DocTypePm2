import { Request, Response } from "express";
import { NodeDataSource } from "../../../database/nri_database";
import Cron from "../../../models/entity_nri/Cron";


export class CronController {

    public async findAll(req: Request, res: Response): Promise<Response> {
        const crons = await NodeDataSource.manager.find(Cron);
        return res.json(crons);
    }

    public async findOne(req: Request, res: Response): Promise<Response> {
        const idcron = Number(req.params.id) ?? 0;
        const crons = await NodeDataSource.manager.findOneBy(Cron, {
            idCron: idcron
        });
        return res.json(crons);
    };

    public async create(req: Request, res: Response): Promise<Response> {
        const cron = await NodeDataSource.manager.getRepository(Cron).save(req.body);
        return res.json(cron);
    };

    public async delete(req: Request, res: Response): Promise<Response> {
        const cron = await NodeDataSource.manager.getRepository(Cron).delete(req.body);
        return res.json(cron);
    };
}