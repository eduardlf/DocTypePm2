import "reflect-metadata"
// import Cliente from '@entityNri/Cliente';
// import { NodeDataSource } from "@database/nri_database";
// import { Conexao } from "@utils/Conexao";
// import { Conexao } from "./src/utils/Conexao.ts";
import { Conexao } from "./utils/Conexao";
import Cliente from "./models/entity_nri/Cliente";
import { NodeDataSource } from "./database/nri_database";

class Index {
    public async run() {

        console.log('asdasd');

        await Conexao.get();

        const cliente = new Cliente();

        cliente.idCliente = 1;
        cliente.nome = "mix";

        await NodeDataSource.manager.save(cliente);

        // const dados = NodeDataSource.getRepository(Cliente).find();
        // console.log(dados);

        process.exit();

    }
}

const ini = new Index();

ini.run();

