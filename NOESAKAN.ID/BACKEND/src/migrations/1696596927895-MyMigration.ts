import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696596927895 implements MigrationInterface {
    name = 'MyMigration1696596927895'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stores" ADD "image" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stores" DROP COLUMN "image"`);
    }

}
