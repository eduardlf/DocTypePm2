import { Router } from "express";
import { ClienteController } from "./controllers/ClienteController";
import { CronController } from "./controllers/CronController";

const rotas = Router();

const cliente = new ClienteController();
const cron = new CronController();

rotas.get('/cliente', cliente.findAll);
rotas.get('/cliente/:id([0-9]+)', cliente.findOne);
rotas.get('/cliente/create', cliente.create);
rotas.get('/cliente/delete', cliente.delete);

rotas.get('/cron', cron.findAll);
rotas.get('/cron/:id([0-9]+)', cron.findOne);
rotas.get('/cron/create', cron.create);
rotas.get('/cron/delete', cron.delete);

export default rotas;