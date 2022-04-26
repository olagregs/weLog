import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTags1651010832851 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "tags",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true
        },
        {
          name: "name",
          type: "string"
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()"
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tags");
  }

}