import express from "express";
import { PweDataSource } from "./database/pwe_database";
import Usuario from "./models/entity_pwe/Usuario";
import { Conexao } from "./utils/Conexao";
import Log from "./utils/Log";


var app = express();

/* GET users listing. */
app.get('/', function (req, res) {

    return res.json({ message: 'aaaa' });

});

app.get('/usuario', async function (req, res) {

    await Conexao.iniciarConexao(PweDataSource);

    const usuarios = await PweDataSource.manager.find(Usuario);

    Log.info('passou por test');

    return res.json(usuarios);

});

app.listen(8080);