import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696657526589 implements MigrationInterface {
    name = 'MyMigration1696657526589'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ratings" DROP CONSTRAINT "FK_26e22323b9ec398a1aa11ba505a"`);
        await queryRunner.query(`ALTER TABLE "ratings" DROP CONSTRAINT "UQ_26e22323b9ec398a1aa11ba505a"`);
        await queryRunner.query(`ALTER TABLE "ratings" ADD CONSTRAINT "FK_26e22323b9ec398a1aa11ba505a" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ratings" DROP CONSTRAINT "FK_26e22323b9ec398a1aa11ba505a"`);
        await queryRunner.query(`ALTER TABLE "ratings" ADD CONSTRAINT "UQ_26e22323b9ec398a1aa11ba505a" UNIQUE ("usersId")`);
        await queryRunner.query(`ALTER TABLE "ratings" ADD CONSTRAINT "FK_26e22323b9ec398a1aa11ba505a" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
