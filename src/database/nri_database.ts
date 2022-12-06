import { DataSource } from "typeorm";

export const NodeDataSource = new DataSource({
    type: "mysql",
    host: "dbmysql-container",
    port: 3306,
    username: "root",
    password: "pass",
    database: "basedados",
    synchronize: false,
    logging: false,
    entities: [
        __dirname+"/../models/entity_nri/**/*.{ts,js}"
    ],
    migrations: [
        __dirname+"/../migration/**/*.{ts,js}"
    ],
    subscribers: []
});