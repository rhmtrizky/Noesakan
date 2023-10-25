import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696580589580 implements MigrationInterface {
    name = 'MyMigration1696580589580'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" RENAME COLUMN "posted_at" TO "createdAt"`);
        await queryRunner.query(`ALTER TABLE "threads" RENAME COLUMN "posted_at" TO "createdAt"`);
        await queryRunner.query(`ALTER TABLE "ratings" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ratings" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "threads" RENAME COLUMN "createdAt" TO "posted_at"`);
        await queryRunner.query(`ALTER TABLE "replies" RENAME COLUMN "createdAt" TO "posted_at"`);
    }

}
