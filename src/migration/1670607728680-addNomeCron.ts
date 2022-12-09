import { MigrationInterface, QueryRunner } from "typeorm";

export class addNomeCron1670607728680 implements MigrationInterface {
    name = 'addNomeCron1670607728680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cron\` ADD \`nome\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cron\` DROP COLUMN \`nome\``);
    }

}
