import express from "express";
import { Conexao } from "../../Shared/Conexao";
import rotas from "./routes";

class Server {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.express.listen(8080);
    }

    private async middlewares() {
        await Conexao.iniciarConexao();
        this.express.use(express.json());
        this.express.use(rotas);
    }
}

new Server();