import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity('configuracao')
export default class Configuracao {
    @PrimaryColumn({
        type: "int",
        name: "id_config"
    })
    idConfig: number

    @Column({
        type: "varchar",
        length: 255,
        name: "chave",
        nullable: false
    })
    chave: string

    @Column({
        type: "text",
        name: "valor",
        nullable: false
    })
    valor: string
}