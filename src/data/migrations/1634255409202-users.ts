import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class users1634255409202 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "nickname",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        uniques: [
          {
            name: "nickname",
            columnNames: ["nickname"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
