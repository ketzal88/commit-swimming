import React, { useRef } from "react";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Button,
} from "@mui/material";
import Check from "@mui/icons-material/Check";
import Close from "@mui/icons-material/Close";
import PrintIcon from "@mui/icons-material/Print";
import ReactToPrint from "react-to-print";

export const SwimmersTable = ({ swimmers, events }) => {
  const componentRef = useRef(null);

  return (
    <Grid container spacing={2} direction="column" justifyContent="center">
      <Grid item xs={4} md={4} lg={4}>
        <ReactToPrint
          trigger={() => (
            <Button variant="contained" endIcon={<PrintIcon />}>
              Print to PDF
            </Button>
          )}
          content={() => componentRef.current}
        />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <TableContainer component={Paper} ref={componentRef}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                {events?.map((event) => (
                  <TableCell key={event._id} align="right">
                    {event.type}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {swimmers.map((row, index) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell key={index} component="th" scope="row">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        alt={row.name}
                        src={row.profilePic}
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: 8,
                          flexShrink: 0,
                          marginRight: 1,
                        }}
                      />
                      {row.name}
                    </div>
                  </TableCell>
                  {row.events.map((row, index) => (
                    <TableCell key={index} align="right">
                      {row.condition ? (
                        <Check data-aos={"zoom-in"} sx={{ color: "green" }} />
                      ) : (
                        <Close data-aos={"zoom-out"} sx={{ color: "red" }} />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
