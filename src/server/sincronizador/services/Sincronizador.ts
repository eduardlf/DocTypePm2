import Usuario from "../../../models/entity_pwe/Usuario";
import { Conexao } from "../../../Shared/Conexao";

export class Sincronizador {
    public async run() {

        await Conexao.getConexaoPwe("basedados");

        const usuario = new Usuario()
        usuario.firstName = "edu"
        usuario.lastName = "f"
        usuario.age = 0
        await Conexao.PweDataSource.manager.save(usuario)
        console.log("Salvo com o id: " + usuario.id);
    }

    public async view() {
        await Conexao.getConexaoPwe("basedados");
        const usuarios = await Conexao.PweDataSource.manager.find(Usuario);
        console.log("Usuarios: ", usuarios)
    }

}