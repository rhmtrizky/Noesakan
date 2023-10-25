import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696651972410 implements MigrationInterface {
    name = 'MyMigration1696651972410'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ratings" ADD "rating" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ratings" DROP COLUMN "rating"`);
    }

}
