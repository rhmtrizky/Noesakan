import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696596722420 implements MigrationInterface {
    name = 'MyMigration1696596722420'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stores" DROP COLUMN "bankAccount"`);
        await queryRunner.query(`ALTER TABLE "stores" ADD "bankAccount" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stores" DROP COLUMN "bankAccount"`);
        await queryRunner.query(`ALTER TABLE "stores" ADD "bankAccount" integer NOT NULL`);
    }

}
