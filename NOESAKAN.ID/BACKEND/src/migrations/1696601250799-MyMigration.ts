import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696601250799 implements MigrationInterface {
    name = 'MyMigration1696601250799'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "image" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "image" SET NOT NULL`);
    }

}
