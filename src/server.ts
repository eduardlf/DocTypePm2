import express from "express";
import { NodeDataSource } from "./database/nri_database";
import { PweDataSource } from "./database/pwe_database";
import { Conexao } from "./utils/Conexao";
import rotas from "./routes";

class Server {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.express.listen(8080);
    }

    private async middlewares() {
        await Conexao.iniciarConexao(NodeDataSource);
        await Conexao.iniciarConexao(PweDataSource);
        this.express.use(express.json());
        this.express.use(rotas);
    }
}

new Server();