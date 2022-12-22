import React from "react";
import { Card, CardHeader, List } from "@mui/material";
import { Swimmer } from "./Swimmer";

export const SwimmerList = ({ handleClick, itemId, swimmers }) => {
  return (
    <Card>
      <CardHeader title={"Swimmers List"} />
      <List spacing={3} sx={{ p: 3, pr: 0 }}>
        {swimmers.map((swimmer, index) => (
          <Swimmer
            key={index}
            swimmer={swimmer}
            handleClick={handleClick}
            itemId={itemId}
          />
        ))}
      </List>
    </Card>
  );
};
