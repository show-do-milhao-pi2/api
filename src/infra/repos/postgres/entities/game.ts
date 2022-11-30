import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { User, Finished } from '.'

@Entity({ name: 'games' })
export class Game {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  help?: boolean

  @Column()
  award?: number

  @Column()
  questions?: number

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date

  @ManyToOne(() => User, user => user.games, { cascade: false })
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  user?: User

  @ManyToOne(() => Finished, finished => finished.games, { cascade: false })
  @JoinColumn({ name: 'finished', referencedColumnName: 'id' })
  finished?: Finished
}
