import { MigrationInterface, QueryRunner } from "typeorm";

export class DadosDoBanco1670615799865 implements MigrationInterface {
    name = 'DadosDoBanco1670615799865'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO \`cliente\` VALUES (1,'mix','teste_mix'),(2,'pab',NULL),(3,'kem',NULL),(4,'ber',NULL)`);
        await queryRunner.query(`INSERT INTO \`configuracao\` VALUES (1,'usar_teste','sim');`);
        await queryRunner.query(`INSERT INTO \`cron\` VALUES (1,1,'mix_1_every30seconds',1,'*/30 * * * * *'),(4,4,'ber_4_every30seconds',1,'*/30 * * * * *'),(5,1,'mix_5_every10seconds',1,'*/10 * * * * *'),(7,3,'kem_7_every10seconds',1,'*/10 * * * * *'),(8,4,'ber_8_every10seconds',1,'*/10 * * * * *'),(9,1,'mix_9_every5minute',1,'*/5 * * * *'),(11,3,'kem_11_every5minute',1,'*/5 * * * *'),(12,4,'ber_12_every5minute',1,'*/5 * * * *')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM \`cliente\``);
        await queryRunner.query(`DELETE FROM \`configuracao\``);
        await queryRunner.query(`DELETE FROM \`cron\``);
    }

}
