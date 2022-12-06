import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('usuario')
export default class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
