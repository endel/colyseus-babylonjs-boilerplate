import * as path from "path";
import * as colyseus from "colyseus";
import * as http from "http";
import * as express from "express";
import * as cors from "cors";

import { GameRoom } from "./rooms/GameRoom";

export const port = process.env.PORT || 2657;

const app = express();

// Create HTTP & WebSocket servers
const server = http.createServer(app);
const gameServer = new colyseus.Server({ server: server });
gameServer.register("game", GameRoom);

app.use(cors());
app.use(express.static(path.join(__dirname, "..", "..", "client", "dist")));

server.listen(port);
console.log(`Listening on ${ port }`)
