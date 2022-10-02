import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createStatusTable1662981399764 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'status',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true
          },
          {
            name: 'status',
            type: 'varchar'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('status')
  }
}
