import { Schema, type, MapSchema } from "@colyseus/schema";
import { Player } from "../entities/Player";

export class StateHandler extends Schema {
    @type({ map: Player }) players = new MapSchema<Player>();
}
