import { Router } from "express";
import { ClienteController } from "./controllers/ClienteController";
import { ConfiguracaoController } from "./controllers/ConfiguracaoController";
import { UsuarioController } from "./controllers/UsuarioController";


const rotas = Router();

const cliente = new ClienteController();
const usuario = new UsuarioController();
const configuracao = new ConfiguracaoController();

rotas.get('/cliente',cliente.findAll);
rotas.get('/cliente/:id([0-9]+)',cliente.findOne);
rotas.get('/cliente/create',cliente.create);
rotas.get('/cliente/delete',cliente.delete);

rotas.get('/usuario',usuario.findAll);
rotas.get('/usuario/:id([0-9]+)',usuario.findOne);
rotas.get('/usuario/create',usuario.create);
rotas.get('/usuario/delete',usuario.delete);

rotas.get('/configuracao',configuracao.findAll);
rotas.get('/configuracao/:id([0-9]+)',configuracao.findOne);
rotas.get('/configuracao/create',configuracao.create);
rotas.get('/configuracao/delete',configuracao.delete);

export default rotas;