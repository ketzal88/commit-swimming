import React from "react";
import { Box, Stack, Card, CardHeader } from "@mui/material";
import { EventItem } from "./EventItem";

export const EventsList = ({ selectedSwimmer, swimmerUpdater }) => {
  return (
    <Card>
      <CardHeader title={"To Do Events List"} />
      <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
        <Box sx={{ minWidth: 240, flexGrow: 1 }}>
          {selectedSwimmer.events?.map((event, index) => (
            <EventItem
              key={index}
              event={event}
              selectedSwimmer={selectedSwimmer}
              swimmerUpdater={swimmerUpdater}
            />
          ))}
        </Box>
      </Stack>
    </Card>
  );
};
