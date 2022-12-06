import express from "express";
import { NodeDataSource } from "./database/nri_database";
import Cliente from "./models/entity_nri/Cliente";
import { Conexao } from "./utils/Conexao";

class Server {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
        this.express.listen(8080);
    }

    private middlewares() {
        this.express.use(express.json());
    }

    private routes() {
        this.express.get('/usuario', async function (req, res) {
            await Conexao.iniciarConexao(NodeDataSource);
            const clientes = await NodeDataSource.manager.find(Cliente);
            return res.json(clientes);
        });

        this.express.get('/usuario/:id([0-9]+)', async function (req, res) {
            const idCliente = Number(req.params.id) ?? 0;
            await Conexao.iniciarConexao(NodeDataSource);
            const clientes = await NodeDataSource.manager.findOneBy(Cliente, {
                idCliente: idCliente
            });
            return res.json(clientes);
        });

        this.express.get('/usuario/create', async function (req, res) {
            await Conexao.iniciarConexao(NodeDataSource);
            const cliente = await NodeDataSource.manager.getRepository(Cliente).save(req.body);
            return res.json(cliente);
        });

        this.express.get('/usuario/delete', async function (req, res) {
            await Conexao.iniciarConexao(NodeDataSource);
            const cliente = await NodeDataSource.manager.getRepository(Cliente).delete(req.body);
            return res.json(cliente);
        });
    }
}

new Server();