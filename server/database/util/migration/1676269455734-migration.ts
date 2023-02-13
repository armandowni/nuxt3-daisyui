import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1676269455734 implements MigrationInterface {
    name = 'migration1676269455734'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "nuxt3Typeorm"."test" ("created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "deleted" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer, CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "nuxt3Typeorm"."test"`);
    }

}
