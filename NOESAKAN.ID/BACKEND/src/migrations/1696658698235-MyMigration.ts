import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696658698235 implements MigrationInterface {
    name = 'MyMigration1696658698235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ratings" DROP CONSTRAINT "FK_41e3111538129f14383f8a73b2b"`);
        await queryRunner.query(`ALTER TABLE "ratings" RENAME COLUMN "storesId" TO "productId"`);
        await queryRunner.query(`ALTER TABLE "ratings" ADD CONSTRAINT "FK_abcea824a43708933e5ac15a0e4" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ratings" DROP CONSTRAINT "FK_abcea824a43708933e5ac15a0e4"`);
        await queryRunner.query(`ALTER TABLE "ratings" RENAME COLUMN "productId" TO "storesId"`);
        await queryRunner.query(`ALTER TABLE "ratings" ADD CONSTRAINT "FK_41e3111538129f14383f8a73b2b" FOREIGN KEY ("storesId") REFERENCES "stores"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
