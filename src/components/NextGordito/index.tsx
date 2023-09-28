import CachedIcon from "@mui/icons-material/Cached";
import { Box, IconButton, Typography } from "@mui/material";
import useNextGordito from "./useNextGordito";

export const NextGordito = () => {
  const { isReady, fetchGordito, nextGordito } = useNextGordito();

  return (
    <Box>
      <Typography variant="h1">El próximo gordito es {nextGordito}</Typography>
      {isReady && (
        <IconButton
          onClick={() => {
            fetchGordito();
          }}
        >
          <CachedIcon />
        </IconButton>
      )}
    </Box>
  );
};
