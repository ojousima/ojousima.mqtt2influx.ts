import { mqttInit } from './mqtt';
import * as Express from 'express';
const http = require('http');
const app = Express();
const heartbeat_port = 3002;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

console.log("Start")

/*
 * Heartbeat scans
 */
http.createServer(app).listen(heartbeat_port, function () {
      console.log('Listening on port ' + heartbeat_port);
});

app.get('/monitor', jsonParser, async function (req: unknown, res: Express.Response) {
  res.send("I'm up :)");
});

mqttInit();
