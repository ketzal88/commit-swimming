import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Input,
  Switch,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Save from "@mui/icons-material/Save";
import Edit from "@mui/icons-material/Edit";

export const EventItem = ({ event, selectedSwimmer, swimmerUpdater }) => {
  const { name, quantity } = event;
  const [checked, setChecked] = useState(event?.condition);
  const [newQuantity, setNewQuantity] = useState("");
  const [edit, setEdit] = useState(false);

  const handleToggle = () => {
    const newEvent = { ...(event.condition = !event?.condition), ...event };
    let newSelectedSwimmer = selectedSwimmer;
    newSelectedSwimmer.events.map((a) => {
      return (a = newEvent);
    });

    setChecked(newEvent.condition);

    swimmerUpdater(selectedSwimmer._id, newSelectedSwimmer);
  };

  const handleSubmit = () => {
    const newEvent = { ...(event.quantity = newQuantity), ...event };
    let newSelectedSwimmer = selectedSwimmer;
    newSelectedSwimmer.events.map((a) => {
      return (a = newEvent);
    });

    setChecked(newEvent.condition);

    swimmerUpdater(selectedSwimmer._id, newSelectedSwimmer);
  };

  const handleEdit = () => setEdit((show) => !show);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6">Type: {name}</Typography>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "10ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Input
            id="standard-helperText"
            label="Quantity"
            defaultValue={quantity}
            disabled={!edit}
            onChange={(v) => setNewQuantity(v.target.value)}
            type="number"
            variant="standard"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleEdit}>
                  {edit ? <Save onClick={handleSubmit} /> : <Edit />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
      </Box>
      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Switch edge="end" onChange={handleToggle} checked={checked} />
      </Box>
    </Stack>
  );
};
