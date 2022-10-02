export interface Login {
  execute: (input: Login.Input) => Promise<Login.Output>
}

export namespace Login {
  export type Input = { nickname: string, password: string }
  export type Output = { id?: string, nickname?: string}
}
