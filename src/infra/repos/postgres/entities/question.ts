import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Status, User, Option, Notification, Game } from '.'

@Entity({ name: 'questions' })
export class Question {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  statement?: string

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date

  @ManyToOne(() => User, user => user.questions, { cascade: false })
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  user?: User

  @ManyToOne(() => Status, status => status.questions, { cascade: false })
  @JoinColumn({ name: 'status', referencedColumnName: 'id' })
  status?: Status

  @OneToMany(() => Option, question => question.question, { lazy: false })
  options?: Option[]

  @OneToMany(() => Notification, question => question.question, { lazy: false })
  notifications?: Notification[]

  @OneToMany(() => Game, game => game.question, { lazy: false })
  games?: Game[]
}
