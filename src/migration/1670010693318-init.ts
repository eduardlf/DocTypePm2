import { MigrationInterface, QueryRunner } from "typeorm";

export class init1670010693318 implements MigrationInterface {
    name = 'init1670010693318'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cliente\` (\`id_cliente\` int NOT NULL, \`sicla\` varchar(255) NULL, PRIMARY KEY (\`id_cliente\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`configuracao\` (\`id_config\` int NOT NULL, \`chave\` varchar(255) NOT NULL, \`valor\` text NOT NULL, PRIMARY KEY (\`id_config\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`configuracao\``);
        await queryRunner.query(`DROP TABLE \`cliente\``);
    }

}
