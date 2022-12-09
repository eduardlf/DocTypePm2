import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCron1670524795784 implements MigrationInterface {
    name = 'AddCron1670524795784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cron\` (\`id_cron\` int NOT NULL, \`id_cliente\` int NOT NULL, \`time_cron\` varchar(255) NULL, PRIMARY KEY (\`id_cron\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`cliente\` ADD \`banco_pwe\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cliente\` DROP COLUMN \`banco_pwe\``);
        await queryRunner.query(`DROP TABLE \`cron\``);
    }

}
