import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1698204866607 implements MigrationInterface {
    name = 'MyMigration1698204866607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "usersId" integer`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_484adf1b450951b27108845f477" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_484adf1b450951b27108845f477"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "usersId"`);
    }

}
