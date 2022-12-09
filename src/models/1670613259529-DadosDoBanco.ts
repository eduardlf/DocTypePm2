import { MigrationInterface, QueryRunner } from "typeorm"

export class DadosDoBanco1670613259529 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO \`cliente\` VALUES (1,'mix','teste_mix'),(2,'pab',NULL),(3,'kem',NULL),(4,'ber',NULL)`);
        await queryRunner.query(`INSERT INTO \`configuracao\` VALUES (1,'usar_teste','sim');`);
        await queryRunner.query(`INSERT INTO \`cron\` VALUES (1,1,'*/30 * * * * *','mix_1_every30seconds',1),(4,4,'*/30 * * * * *','ber_4_every30seconds',1),(5,1,'*/10 * * * * *','mix_5_every10seconds',1),(7,3,'*/10 * * * * *','kem_7_every10seconds',1),(8,4,'*/10 * * * * *','ber_8_every10seconds',1),(9,1,'*/5 * * * *','mix_9_every5minute',1),(11,3,'*/5 * * * *','kem_11_every5minute',1),(12,4,'*/5 * * * *','ber_12_every5minute',1)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM \`cliente\``);
        await queryRunner.query(`DELETE FROM \`configuracao\``);
        await queryRunner.query(`DELETE FROM \`cron\``);
    }

}
