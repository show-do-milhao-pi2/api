import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Game } from './game'

@Entity({ name: 'finished' })
export class Finished {
  @PrimaryGeneratedColumn({ name: 'id' })
  id!: number

  @Column()
  because?: string

  @OneToMany(() => Game, games => games.finished, { lazy: false })
  games?: Game[]
}
