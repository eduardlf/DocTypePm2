// import { NodeDataSource } from "@database/nri_database";
import { NodeDataSource } from "./../database/nri_database";
import Log from "./Log";

export class Conexao {
    static async get() {
        if (NodeDataSource.isInitialized) {
            await NodeDataSource.initialize()
                .then(() => {
                    Log.info("Banco iniciado!");
                })
                .catch((err: any) => {
                    console.error("Error during Data Source initialization", err)
                });
        }else{
            Log.info('Banco ja iniciado');
        }
    }
}