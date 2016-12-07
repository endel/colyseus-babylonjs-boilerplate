import ClockTimer from "clock-timer.js";
import { Player } from "../entities/Player";

const clock: WeakMap<StateHandler, ClockTimer> = new WeakMap<StateHandler, ClockTimer>();

export class StateHandler {

    players: { [clientId: string]: Player } = {};

    constructor (roomClock) {
        clock.set(this, roomClock);
    }

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
