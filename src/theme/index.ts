import { Theme, createTheme } from '@mui/material'
import { useCallback, useState } from 'react'

export const baseColors = {
  bole: '#7B4838ff',
  pearl: '#DFD9C1ff',
  persianOrange: '#CD8E76ff',
  ecru: '#CFB274ff',
  ebony: '#6C6959ff',
}

function getRandomTheme(): Theme {
  const arr = Object.values(baseColors).sort(() => -1 + Math.random() * 2)

  return createTheme({
    palette: {
      background: {
        default: baseColors.persianOrange,
        paper: baseColors.pearl,
      },
      primary: { main: arr.pop() as string },
      secondary: { main: baseColors.bole, contrastText: baseColors.pearl },
    },
  })
}

export const theme = createTheme({
  myPalette: baseColors,
  ...getRandomTheme(),
})

export function useRandomTheme(): [Theme, () => void] {
  const [innerTheme, setTheme] = useState<Theme>(theme)

  return [innerTheme, useCallback(() => setTheme(getRandomTheme()), [])]
}

declare module '@mui/material/styles' {
  interface ThemeOptions {
    myPalette?: {
      bole: string
      pearl: string
      persianOrange: string
      ecru: string
      ebony: string
    }
  }
}
