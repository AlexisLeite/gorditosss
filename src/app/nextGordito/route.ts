import { NextResponse } from 'next/server'
import { list } from '../listAll/route'

export async function GET(request: Request) {
  console.log(request.body?.locked)
  /**
   * Este método debería devolver el próximo cocinero
   */
  const next = list[Math.floor(list.length * Math.random())]

  return NextResponse.json({ next: next.name })
}
