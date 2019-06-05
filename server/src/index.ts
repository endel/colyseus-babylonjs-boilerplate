import path from "path";
import http from "http";
import express from "express";
import cors from "cors";
import { Server } from "colyseus";

import { GameRoom } from "./rooms/GameRoom";

export const port = process.env.PORT || 2657;

const app = express();

// Create HTTP & WebSocket servers
const server = http.createServer(app);
const gameServer = new Server({ server: server });
gameServer.register("game", GameRoom);

app.use(cors());
app.use(express.static(path.join(__dirname, "..", "..", "client", "dist")));

server.listen(port);
console.log(`Listening on ${ port }`)
