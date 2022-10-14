import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1660040226568 implements MigrationInterface {
    name = 'migration1660040226568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "nuxtTypeorm"."test" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" bigint NOT NULL, "created" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "nuxtTypeorm"."test"`);
    }

}
