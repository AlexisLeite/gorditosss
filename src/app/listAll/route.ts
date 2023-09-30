import { TGorditoTurno } from '@/util/types'
import { NextResponse } from 'next/server'

function getRandomDate() {
  const startDate = new Date()
  const endDate = new Date(2024, 1, 1)

  const randomTimestamp =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime())

  const randomDate = new Date(randomTimestamp)

  return randomDate.toLocaleDateString()
}

export const list: TGorditoTurno[] = [
  { name: 'elPepe', date: getRandomDate() },
  { name: 'Casandra', date: getRandomDate() },
  { name: 'Roberto', date: getRandomDate() },
]

export async function GET(request: Request) {
  console.log(request.body?.locked)
  /**
   * Este método debería devolver una lista ordenada de los próximos cocineros.
   */
  const list: TGorditoTurno[] = [
    { name: 'elPepe', date: getRandomDate() },
    { name: 'Casandra', date: getRandomDate() },
    { name: 'Roberto', date: getRandomDate() },
  ]

  return NextResponse.json(list.sort(() => -1 + Math.random() * 2))
}
