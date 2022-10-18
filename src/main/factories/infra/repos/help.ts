import { HelpRepository } from '@/infra/repos/postgres/help'

export const makeHelpRepo = (): HelpRepository => {
  return new HelpRepository()
}
