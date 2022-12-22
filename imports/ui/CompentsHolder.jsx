import React, { useState, useEffect } from "react";
import { SwimmerList } from "./SwimmerList.jsx";
import { EventsList } from "./EventsList.jsx";
import { SwimmersTable } from "./SwimmersTable.jsx";
import { Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTracker } from "meteor/react-meteor-data";
import { SwimmersCollection, EventsCollection } from "./../api/collections";

export const CompentsHolder = () => {
  const [itemId, setItemId] = useState("");

  const [openEventList, setOpenEventList] = useState(false);
  const [selectedSwimmer, setSelectedSwimmer] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleClick = (swimmer) => {
    if (itemId === "") {
      setSelectedSwimmer(swimmer);
      setItemId(swimmer._id);
      setOpenEventList(!openEventList);
    } else {
      setItemId("");
      setOpenEventList(!openEventList);
    }
  };

  const swimmers = useTracker(() => {
    return SwimmersCollection.find().fetch();
  });

  const events = useTracker(() => {
    return EventsCollection.find().fetch();
  });

  const swimmerUpdater = (swimmerId, newSelectedSwimmer) => {
    SwimmersCollection.update(
      { _id: swimmerId },
      {
        $set: newSelectedSwimmer,
      }
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={6}>
        <SwimmerList
          data-aos="fade-left"
          handleClick={handleClick}
          itemId={itemId}
          swimmers={swimmers}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        {openEventList && (
          <div data-aos={openEventList ? "fade-left" : "fade-right"}>
            <EventsList
              selectedSwimmer={selectedSwimmer}
              swimmerUpdater={swimmerUpdater}
            />
          </div>
        )}
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <SwimmersTable swimmers={swimmers} events={events} />
      </Grid>
    </Grid>
  );
};
