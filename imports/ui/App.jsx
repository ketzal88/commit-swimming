import React from "react";
import { Container, Typography } from "@mui/material";
import { CompentsHolder } from "./CompentsHolder.jsx";

export const App = () => (
  <div>
    <Container sx={{ padding: 5 }} width={"100%"}>
      <Typography variant="h2" color={"white"} paddingBottom={6}>
        Coach Panel | 🏊
      </Typography>
      <CompentsHolder />
    </Container>
  </div>
);
