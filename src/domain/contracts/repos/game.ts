import { Question, User, Awards, Option, Help, Finished } from '.'

export type Game = {
  id: number
  award?: Awards
  option?: Option
  help?: Help
  finished?: Finished
  user?: User
  question?: Question
  createdAt?: Date
  updatedAt?: Date
}

export interface LoadGames {
  get: () => Promise<LoadGames.Output>
}

export namespace LoadGames {
  export type Output = Game[]
}

export interface ShowGame {
  show: (input: ShowGame.Input) => Promise<ShowGame.Output>
}

export namespace ShowGame {
  export type Input = { id: string }
  export type Output = Game | undefined
}

export interface UpdateGame {
  update: (input: UpdateGame.Input) => Promise<UpdateGame.Output>
}

export namespace UpdateGame {
  export type Input = {
    id: string
    award?: Awards
    option?: Option
    help?: Help
    finished?: Finished
    user?: User
    question?: Question
  }
  export type Output = Game | undefined
}

export interface InsertGame {
  insert: (input: InsertGame.Input) => Promise<InsertGame.Output>
}

export namespace InsertGame {
  export type Input = {
    award?: Awards
    option?: Option
    help?: Help
    finished?: Finished
    user?: User
    question?: Question
  }
  export type Output = Game | undefined
}

export interface DeleteGame {
  delete: (input: DeleteGame.Input) => Promise<DeleteGame.Output>
}

export namespace DeleteGame {
  export type Input = { id: string }
  export type Output<T = any> = T
}
