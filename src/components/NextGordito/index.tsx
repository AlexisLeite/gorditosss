import CachedIcon from '@mui/icons-material/Cached'
import { Box, IconButton, Typography } from '@mui/material'
import useNextGordito from './useNextGordito'

export const NextGordito = () => {
  const { isReady, fetchGordito, nextGordito } = useNextGordito()

  return (
    <Box>
      <Typography variant="h2">El próximo gordito es:</Typography>
      <Typography variant="h1" textAlign="right">
        {nextGordito}
      </Typography>
      <Box alignItems="end" display="flex" justifyContent={'end'}>
        <IconButton
          onClick={() => {
            fetchGordito()
          }}
          disabled={!isReady}
        >
          <CachedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
