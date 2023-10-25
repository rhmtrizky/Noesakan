import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696604416795 implements MigrationInterface {
    name = 'MyMigration1696604416795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_484adf1b450951b27108845f477"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "usersId" TO "storesId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "storeId" integer`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_d37c21c15084ded9e0edcd5fd3d" FOREIGN KEY ("storesId") REFERENCES "stores"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_c82cd4fa8f0ac4a74328abe997a" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_c82cd4fa8f0ac4a74328abe997a"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_d37c21c15084ded9e0edcd5fd3d"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "storeId"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "storesId" TO "usersId"`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_484adf1b450951b27108845f477" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
