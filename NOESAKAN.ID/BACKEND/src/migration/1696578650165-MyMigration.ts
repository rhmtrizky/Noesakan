import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696578650165 implements MigrationInterface {
    name = 'MyMigration1696578650165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stores" ADD "usersId" integer`);
        await queryRunner.query(`ALTER TABLE "stores" ADD CONSTRAINT "UQ_79a08d0e179d795489c2ee4e9b9" UNIQUE ("usersId")`);
        await queryRunner.query(`ALTER TABLE "ratings" ADD "usersId" integer`);
        await queryRunner.query(`ALTER TABLE "ratings" ADD CONSTRAINT "UQ_26e22323b9ec398a1aa11ba505a" UNIQUE ("usersId")`);
        await queryRunner.query(`ALTER TABLE "stores" ADD CONSTRAINT "FK_79a08d0e179d795489c2ee4e9b9" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "ratings" ADD CONSTRAINT "FK_26e22323b9ec398a1aa11ba505a" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ratings" DROP CONSTRAINT "FK_26e22323b9ec398a1aa11ba505a"`);
        await queryRunner.query(`ALTER TABLE "stores" DROP CONSTRAINT "FK_79a08d0e179d795489c2ee4e9b9"`);
        await queryRunner.query(`ALTER TABLE "ratings" DROP CONSTRAINT "UQ_26e22323b9ec398a1aa11ba505a"`);
        await queryRunner.query(`ALTER TABLE "ratings" DROP COLUMN "usersId"`);
        await queryRunner.query(`ALTER TABLE "stores" DROP CONSTRAINT "UQ_79a08d0e179d795489c2ee4e9b9"`);
        await queryRunner.query(`ALTER TABLE "stores" DROP COLUMN "usersId"`);
    }

}
