import { Room, Client } from "colyseus";

import { StateHandler } from "./StateHandler";
import { Player } from "../entities/Player";

export class GameRoom extends Room<StateHandler> {

    constructor (options) {
        super(options);
        this.setSimulationInterval(this.onUpdate);
        this.setState(new StateHandler(this.clock));
    }

    requestJoin (options) {
        return true;
    }

    onJoin (client) {
        if (this.clients.length === 8) {
            this.lock();
        }

        let player = new Player({
            name: `Player ${ this.clients.length }`
        });
        this.state.addPlayer(client.id, player);
    }

    onMessage (client: Client, data: any) {
        let player = this.state.getPlayer(client.id);

        console.log(`[ ${ client.id } ]`, player.name, "sent:", data);
    }

    onUpdate = () => {
        this.state.update();
    }

    onLeave (client) {
        this.state.removePlayer(client.id);
    }

    onDispose () {
    }

}
