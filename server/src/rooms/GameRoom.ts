import { Room, Client } from "colyseus";

import { StateHandler } from "./StateHandler";
import { Player } from "../entities/Player";

export class GameRoom extends Room<StateHandler> {
    maxClients = 8;

    onCreate (options) {
        this.setSimulationInterval(() => this.onUpdate());
        this.setState(new StateHandler());
    }

    onJoin (client) {
        const player = new Player();
        player.name = `Player ${ this.clients.length }`;
        player.position.x = Math.random();
        player.position.y = Math.random();
        player.position.z = Math.random();

        this.state.players[client.sessionId] = player;
    }

    onMessage (client: Client, message: any) {
        const [event, data] = message;
        const player: Player = this.state.players[client.sessionId];

        if (event === "key") {
            player.pressedKeys = data;
        }
    }

    onUpdate () {
        for (const sessionId in this.state.players) {
            const player: Player = this.state.players[sessionId];
            player.position.x += player.pressedKeys.x * 0.1;
            player.position.z -= player.pressedKeys.y * 0.1;
        }
    }

    onLeave (client: Client) {
        delete this.state.players[client.sessionId];
    }

    onDispose () {
    }

}
