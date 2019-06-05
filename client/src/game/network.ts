import { Client } from "colyseus.js";

const PROTOCOL = window.location.protocol.replace("http", "ws");

const ENDPOINT = (window.location.hostname.indexOf("heroku") >= 0 || window.location.hostname.indexOf("now.sh") >= 0 )
    ? `${ PROTOCOL }//${ window.location.hostname }` // port 80 on heroku or now
    : `${ PROTOCOL }//${ window.location.hostname }:2657` // port 2657 on localhost

export const client = new Client(ENDPOINT);
