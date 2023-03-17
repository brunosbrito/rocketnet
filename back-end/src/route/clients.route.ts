import { Router } from 'express';
import clientsController from '../controller/clients.controller';

const route = Router();

route.post('/', clientsController.registerClient);

export default route;