
export type Finished = {
  id: number
  because?: number
}

export interface ListFinished {
  get: () => Promise<ListFinished.Output>
}

export namespace ListFinished {
  export type Output = Finished[]
}
