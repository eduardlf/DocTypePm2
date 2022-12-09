import { DataSource, DataSourceOptions } from "typeorm";
import { NodeDataSource } from "../database/nri_database";
import Log from "./Log";

export class Conexao {

    static async iniciarConexao() {
        if (!NodeDataSource.isInitialized) {
            await NodeDataSource.initialize()
            .then(() => {
                Log.info("Banco iniciado!");
            })
            .catch((err: any) => {
                Log.info("Error durante a inicializacao");
                console.log(err);
            });
        }
    }

    static PweDataSource:DataSource;
    
    static async getConexaoPwe(base: string): Promise<DataSource> {
        if (!this.PweDataSource?.isInitialized) {
            let PweDataSourceOptions:DataSourceOptions = {
                type: "postgres",
                host: "dbpostgres-container",
                port: 5432,
                username: "test",
                password: "test",
                database: base,
                synchronize: true,
                logging: false,
                entities: [
                    __dirname+"/../models/entity_pwe/**/*.{ts,js}"
                ],
                migrations: [],
                subscribers: [],
            }
            let conexao = new DataSource(PweDataSourceOptions).initialize();
            conexao.then(() => {
                Log.info("Banco iniciado!");
            });
            conexao.catch((err: any) => {
                Log.info("Error durante a inicializacao");
                console.log(err);
            });
            this.PweDataSource = await conexao;
            return conexao;
        }
    }
}