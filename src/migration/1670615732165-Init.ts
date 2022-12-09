import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1670615732165 implements MigrationInterface {
    name = 'Init1670615732165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cron\` (\`id_cron\` int NOT NULL, \`id_cliente\` int NOT NULL, \`nome\` varchar(255) NULL, \`ativo\` tinyint NOT NULL DEFAULT 1, \`time_cron\` varchar(255) NULL, PRIMARY KEY (\`id_cron\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cliente\` (\`id_cliente\` int NOT NULL, \`sicla\` varchar(255) NULL, \`banco_pwe\` varchar(255) NULL, PRIMARY KEY (\`id_cliente\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`configuracao\` (\`id_config\` int NOT NULL, \`chave\` varchar(255) NOT NULL, \`valor\` text NOT NULL, PRIMARY KEY (\`id_config\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`cron\` ADD CONSTRAINT \`fk_cron_cliente\` FOREIGN KEY (\`id_cliente\`) REFERENCES \`cliente\`(\`id_cliente\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cron\` DROP FOREIGN KEY \`fk_cron_cliente\``);
        await queryRunner.query(`DROP TABLE \`configuracao\``);
        await queryRunner.query(`DROP TABLE \`cliente\``);
        await queryRunner.query(`DROP TABLE \`cron\``);
    }

}
