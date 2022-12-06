import { NodeDataSource } from "./database/nri_database";
import { PweDataSource } from "./database/pwe_database";
import Cliente from "./models/entity_nri/Cliente";
import Usuario from "./models/entity_pwe/Usuario";
import { Conexao } from "./utils/Conexao";


export class Sincronizador {
    public async run() {
        await Conexao.iniciarConexao(NodeDataSource);
        await Conexao.iniciarConexao(PweDataSource);

        const usuario = new Usuario()
        usuario.firstName = "Timber"
        usuario.lastName = "Saw"
        usuario.age = 25
        await PweDataSource.manager.save(usuario)
        console.log("Saved a new user with id: " + usuario.id);

        const cliente = new Cliente();
        cliente.idCliente = 4;
        cliente.nome = "mix";
        await NodeDataSource.manager.save(cliente);
    }

    public async view(){
        await Conexao.iniciarConexao(NodeDataSource);
        await Conexao.iniciarConexao(PweDataSource);

        const usuarios = await PweDataSource.manager.find(Usuario);
        console.log("Loaded Usuarios: ", usuarios)

        const clientes = await NodeDataSource.manager.find(Cliente);
        console.log("Loaded Clientes: ", clientes)
    }

}