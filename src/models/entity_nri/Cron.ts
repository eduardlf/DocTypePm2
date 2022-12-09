import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import Cliente from "./Cliente"

export enum TimeCron {
    every10seconds = '*/10 * * * * *',
    every30seconds = '*/30 * * * * *',
    every5minute = '*/5 * * * *'
}

@Entity('cron')
export default class Cron {
    @PrimaryColumn({
        type: "int",
        name: "id_cron"
    })
    idCron: number

    @Column({
        type: "int",
        name: "id_cliente"
    })
    idCliente: number
    
    @Column({
        type: "varchar",
        length: 255,
        name: "nome",
        nullable: true
    })
    nome: string

    @Column({
        type: "bool",
        name: "ativo",
        default: true
    })
    ativo: boolean

    @Column({
        type: "varchar",
        length: 255,
        name: "time_cron",
        nullable: true
    })
    timeCron: TimeCron

    @ManyToOne(() => Cliente, (cliente) => cliente.crons,{
        eager: true,
    })
    @JoinColumn({
        name: "id_cliente",
        referencedColumnName: "idCliente",
        foreignKeyConstraintName: "fk_cron_cliente"
    })
    cliente: Cliente;
}