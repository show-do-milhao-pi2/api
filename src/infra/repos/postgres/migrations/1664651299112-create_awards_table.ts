import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createAwardsTable1664651299112 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'awards',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true
          },
          {
            name: 'award',
            type: 'int'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('awards')
  }
}
