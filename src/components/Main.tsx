'use client'

import {
  Box,
  Container,
  CssBaseline,
  IconButton,
  Paper,
  ThemeProvider,
} from '@mui/material'
import { useRandomTheme } from '@/theme'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import { NextGordito } from './NextGordito'
import { useState } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { List } from './List'

const Main = () => {
  const [theme, randomize] = useRandomTheme()
  const [showList, setShowList] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          position: 'fixed',
          top: 6,
          bottom: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: ['100%'],
        }}
      >
        <Paper
          sx={{
            p: 8,
            borderRadius: 8,
          }}
          elevation={5}
        >
          <ErrorBoundary>{showList ? <List /> : <NextGordito />}</ErrorBoundary>
        </Paper>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'end',
            gap: 1,
            position: 'fixed',
            right: 5,
            bottom: 5,
          }}
        >
          <IconButton
            sx={{
              background: (theme) => theme.palette.secondary.main,
              color: (theme) => theme.palette.secondary.contrastText,
            }}
            onClick={() => setShowList((c) => !c)}
          >
            <FormatListNumberedIcon />
          </IconButton>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Main
