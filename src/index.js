import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import config from './config';

let app = express();
app.server = http.createServer(app);

app.use(bodyParser.json({
  limit : config.bodyLimit
}));

app.use('/api/', routes);

app.server.listen(config.port);

export default app;
