import { Request, Response } from "express";
import { NodeDataSource } from "../database/nri_database";
import Cliente from "../models/entity_nri/Cliente";


export class ClienteController {

    public async findAll (req: Request, res: Response): Promise<Response> {
        const clientes = await NodeDataSource.manager.find(Cliente);
        return res.json(clientes);
    }

    public async findOne (req: Request, res: Response): Promise<Response> {
        const idCliente = Number(req.params.id) ?? 0;
        const clientes = await NodeDataSource.manager.findOneBy(Cliente, {
            idCliente: idCliente
        });
        return res.json(clientes);
    };

    public async create (req: Request, res: Response): Promise<Response> {
        const cliente = await NodeDataSource.manager.getRepository(Cliente).save(req.body);
        return res.json(cliente);
    };

    public async delete (req: Request, res: Response): Promise<Response> {
        const cliente = await NodeDataSource.manager.getRepository(Cliente).delete(req.body);
        return res.json(cliente);
    };
}