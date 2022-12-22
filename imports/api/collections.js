import { Mongo } from "meteor/mongo";

export const SwimmersCollection = new Mongo.Collection("swimmers");
export const EventsCollection = new Mongo.Collection("events");
