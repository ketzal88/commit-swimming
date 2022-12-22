import { Meteor } from "meteor/meteor";
import { SwimmersCollection } from "/imports/api/collections";
import { EventsCollection } from "/imports/api/collections";

async function insertSwimmer({ name, profilePic, speciality, events }) {
  await SwimmersCollection.insertAsync({
    name,
    profilePic,
    speciality,
    createdAt: new Date(),
    events,
  });
}

async function insertEvent({ quantity, type }) {
  await EventsCollection.insertAsync({ quantity, type });
}

Meteor.startup(async () => {
  if ((await SwimmersCollection.find().countAsync()) === 0) {
    await insertSwimmer({
      name: "Saul Goodman",
      profilePic: "https://i.pravatar.cc/300",
      speciality: "Front crawl",
      events: [
        { name: "Breast", condition: false, quantity: 0 },
        { name: "Free", condition: false, quantity: 0 },
        { name: "Fly", condition: false, quantity: 0 },
        { name: "Back", condition: false, quantity: 0 },
      ],
    });

    await insertSwimmer({
      name: "Walter White",
      profilePic: "https://i.pravatar.cc/300",
      speciality: "Breaststroke",
      events: [
        { name: "Breast", condition: false, quantity: 0 },
        { name: "Free", condition: false, quantity: 0 },
        { name: "Fly", condition: false, quantity: 0 },
        { name: "Back", condition: false, quantity: 0 },
      ],
    });

    await insertSwimmer({
      name: "Jesse Pinkman",
      profilePic: "https://i.pravatar.cc/300",
      speciality: "Backstroke",
      events: [
        { name: "Breast", condition: false, quantity: 0 },
        { name: "Free", condition: false, quantity: 0 },
        { name: "Fly", condition: false, quantity: 0 },
        { name: "Back", condition: false, quantity: 0 },
      ],
    });

    await insertSwimmer({
      name: "Tuco Salamanca",
      profilePic: "https://i.pravatar.cc/300",
      speciality: "Butterfly",
      events: [
        { name: "Breast", condition: false, quantity: 0 },
        { name: "Free", condition: false, quantity: 0 },
        { name: "Fly", condition: false, quantity: 0 },
        { name: "Back", condition: false, quantity: 0 },
      ],
    });

    await insertSwimmer({
      name: "Heinsenberg",
      profilePic: "https://i.pravatar.cc/300",
      speciality: "Butterfly",
      events: [
        { name: "Breast", condition: false, quantity: 0 },
        { name: "Free", condition: false, quantity: 0 },
        { name: "Fly", condition: false, quantity: 0 },
        { name: "Back", condition: false, quantity: 0 },
      ],
    });
  }
  if ((await EventsCollection.find().countAsync()) === 0) {
    await insertEvent({
      quantity: 0,
      type: "Free",
    });
    await insertEvent({
      quantity: 0,
      type: "Fly",
    });
    await insertEvent({
      quantity: 0,
      type: "Breast",
    });
    await insertEvent({
      quantity: 0,
      type: "Back",
    });
  }
});
