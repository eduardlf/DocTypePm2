import { MigrationInterface, QueryRunner } from "typeorm";

export class addAtivoCron1670611092091 implements MigrationInterface {
    name = 'addAtivoCron1670611092091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cron\` ADD \`ativo\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cron\` DROP COLUMN \`ativo\``);
    }

}
