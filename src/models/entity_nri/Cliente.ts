import { Entity, PrimaryColumn, Column } from "typeorm"

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
}