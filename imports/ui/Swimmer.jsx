import React from "react";
import {
  Box,
  Link,
  Avatar,
  Typography,
  ListItem,
  ListItemAvatar,
} from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";

export const Swimmer = ({ swimmer, handleClick, itemId }) => {
  const { name, createdAt, profilePic, speciality, _id: id } = swimmer;

  return (
    <ListItem
      direction="row"
      alignItems="center"
      key={itemId}
      spacing={2}
      onClick={() => handleClick(swimmer)}
      sx={{
        backgroundColor: itemId === id ? "#999" : "#fff",
        paddingRight: 5,
        borderEndStartRadius: 8,
        borderStartStartRadius: 8,
      }}
    >
      <ListItemAvatar>
        <Avatar
          alt={name}
          src={profilePic}
          sx={{ width: 48, height: 48, borderRadius: 8, flexShrink: 0 }}
        />
      </ListItemAvatar>

      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {name}
        </Link>

        <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
          Good at: {speciality}
        </Typography>
      </Box>

      <Typography
        variant="caption"
        sx={{ pr: 3, flexShrink: 0, color: "text.secondary" }}
      >
        Last Update: {createdAt.toLocaleTimeString()}
      </Typography>
      {itemId === id ? <ArrowForward /> : <ArrowBack />}
    </ListItem>
  );
};
