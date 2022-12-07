import { Request, Response } from "express";
import { NodeDataSource } from "../database/nri_database";
import Configuracao from "../models/entity_nri/Configuracao";


export class ConfiguracaoController {

    public async findAll (req: Request, res: Response): Promise<Response> {
        const configuracaos = await NodeDataSource.manager.find(Configuracao);
        return res.json(configuracaos);
    }

    public async findOne (req: Request, res: Response): Promise<Response> {
        const idConfiguracao = Number(req.params.id) ?? 0;
        const configuracaos = await NodeDataSource.manager.findOneBy(Configuracao, {
            idConfig: idConfiguracao
        });
        return res.json(configuracaos);
    };

    public async create (req: Request, res: Response): Promise<Response> {
        const configuracao = await NodeDataSource.manager.getRepository(Configuracao).save(req.body);
        return res.json(configuracao);
    };

    public async delete (req: Request, res: Response): Promise<Response> {
        const configuracao = await NodeDataSource.manager.getRepository(Configuracao).delete(req.body);
        return res.json(configuracao);
    };
}