const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class migration1676280925167 {
    name = 'migration1676280925167'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "nuxt3Typeorm"."Test" ("created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "deleted" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer, CONSTRAINT "PK_257c543a36adff226a93de571a2" PRIMARY KEY ("id"))`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "nuxt3Typeorm"."Test"`);
    }
}
