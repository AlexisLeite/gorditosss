import { TGorditoTurno } from './types'

type TUrls = {
  listAll: TGorditoTurno[]
  nextGordito: { next: string }
}

export const server = new (class Server {
  async get<Key extends keyof TUrls>(url: Key): Promise<TUrls[Key]> {
    try {
      const result = await fetch(url)
      const json = (await result?.json?.()) as TUrls[Key]

      return json ?? null
    } catch (e) {
      console.error(e)
      throw new Error(`Error while getting ${url}`)
    }
  }
})()
