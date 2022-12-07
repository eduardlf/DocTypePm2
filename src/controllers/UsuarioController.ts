import { Request, Response } from "express";
import { PweDataSource } from "../database/pwe_database";
import Usuario from "../models/entity_pwe/Usuario";


export class UsuarioController {

    public async findAll (req: Request, res: Response): Promise<Response> {
        const usuarios = await PweDataSource.manager.find(Usuario);
        return res.json(usuarios);
    }

    public async findOne (req: Request, res: Response): Promise<Response> {
        const idUsuario = Number(req.params.id) ?? 0;
        const usuarios = await PweDataSource.manager.findOneBy(Usuario, {
           id: idUsuario
        });
        return res.json(usuarios);
    };

    public async create (req: Request, res: Response): Promise<Response> {
        const usuario = await PweDataSource.manager.getRepository(Usuario).save(req.body);
        return res.json(usuario);
    };

    public async delete (req: Request, res: Response): Promise<Response> {
        const usuario = await PweDataSource.manager.getRepository(Usuario).delete(req.body);
        return res.json(usuario);
    };
}