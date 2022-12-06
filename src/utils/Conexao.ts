import { DataSource } from "typeorm";
import Log from "./Log";

export class Conexao {
    static async iniciarConexao(database: DataSource) {
        if (!database.isInitialized) {
            await database.initialize()
                .then(() => {
                    Log.info("Banco iniciado!");
                })
                .catch((err: any) => {
                    Log.info("Error durante a inicializacao");
                    console.log(err);
                });
        }else{
            Log.info('Banco ja iniciado');
        }
    }
}