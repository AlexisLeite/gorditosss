"use client";

import { Box, CssBaseline } from "@mui/material";
import { NextGordito } from "./NextGordito";

const Main = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NextGordito />
      </Box>
    </>
  );
};

export default Main;
