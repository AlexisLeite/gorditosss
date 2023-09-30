import { server } from '@/util/server'
import { TGorditoTurno } from '@/util/types'
import useMount from '@/util/useMount'
import { useRef, useState } from 'react'

export function useList(): [TGorditoTurno[], boolean] {
  const [rows, setRows] = useState<TGorditoTurno[]>(
    (JSON.parse(
      sessionStorage.getItem('lastList') as string,
    ) as TGorditoTurno[]) ?? [],
  )
  const hasFetched = useRef(!!sessionStorage.getItem('lastList'))

  useMount(() => {
    server.get('listAll').then((r) => {
      hasFetched.current = true
      setRows(r)
      sessionStorage.setItem('lastList', JSON.stringify(r))
    })
  })

  return [rows, hasFetched.current]
}
