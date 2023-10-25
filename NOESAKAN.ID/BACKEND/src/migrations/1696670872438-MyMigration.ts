import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696670872438 implements MigrationInterface {
    name = 'MyMigration1696670872438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" ALTER COLUMN "image" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" ALTER COLUMN "image" SET NOT NULL`);
    }

}
