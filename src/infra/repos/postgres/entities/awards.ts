import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'awards' })
export class Awards {
  @PrimaryGeneratedColumn({ name: 'id' })
  id!: number

  @Column()
  award?: string
}
