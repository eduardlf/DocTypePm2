import { DataSource } from "typeorm"

export const PweDataSource = new DataSource({
    type: "postgres",
    host: "dbpostgres-container",
    port: 5432,
    username: "test",
    password: "test",
    database: "basedados",
    synchronize: true,
    logging: false,
    entities: [
        __dirname+"/../models/entity_pwe/**/*.{ts,js}"
    ],
    migrations: [],
    subscribers: [],
})
