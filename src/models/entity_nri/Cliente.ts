import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm"
import Cron from "./Cron"

@Entity('cliente')
export default class Cliente {
    @PrimaryColumn({
        type: "int",
        name: "id_cliente"
    })
    idCliente: number 

    @Column({
        type: "varchar",
        length: 255,
        name: "sicla",
        nullable: true
    })
    nome: string

    @Column({
        type: "varchar",
        length: 255,
        name: "banco_pwe",
        nullable: true
    })
    bancoPwe: string

    @OneToMany(()=>Cron, (cron) => cron.cliente)
    crons: Cron[]
}