
export type Awards = {
  id: number
  award?: string
}

export interface ListAwards {
  get: () => Promise<ListAwards.Output>
}

export namespace ListAwards {
  export type Output = Awards[]
}
