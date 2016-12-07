import { Client } from "colyseus.js";

export const client = new Client(process.env.ENDPOINT.replace("http:", "ws:"));
export const room = client.join("game");
