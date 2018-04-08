import { EntityMap } from "colyseus";
import { Player } from "../entities/Player";

export class StateHandler {

    players: EntityMap<Player> = {};

    update (): void {
        //
        // Implement your server-side game loop here
        //
    }

    addPlayer (clientId: string, player: Player): void {
        this.players[ clientId ] = player;
    }

    getPlayer (clientId: string): Player {
        return this.players[ clientId ];
    }

    removePlayer (clientId): void {
        delete this.players[ clientId ];
    }

}
