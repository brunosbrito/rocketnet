import { Router } from 'express';
import clientsController from '../controller/clients.controller';
import validateClients from '../middlewares/client.middlweares';

const route = Router();

route.post('/', validateClients, clientsController.registerClient);

export default route;