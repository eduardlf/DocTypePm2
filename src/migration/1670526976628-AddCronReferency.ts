import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCronReferency1670526976628 implements MigrationInterface {
    name = 'AddCronReferency1670526976628'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cron\` ADD CONSTRAINT \`fk_cron_cliente\` FOREIGN KEY (\`id_cliente\`) REFERENCES \`cliente\`(\`id_cliente\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cron\` DROP FOREIGN KEY \`fk_cron_cliente\``);
    }

}
