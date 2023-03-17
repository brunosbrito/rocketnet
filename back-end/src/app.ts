import express from 'express';
import { NextFunction, Request, Response } from 'express';
import routeClients from './route/clients.route';
import route from './route/coverage.route';
import routePlans from './route/plans.route';
const cors = require('cors');

const app = express();

app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    next();
});

app.use(express.json());

app.use('/plans',routePlans);
app.use('/clients', routeClients);
app.use('/coverage', route );

export default app;