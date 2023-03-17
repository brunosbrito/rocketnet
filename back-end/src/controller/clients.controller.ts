import { Response, Request } from 'express';
import { IClients } from '../interfaces';
import clientsService from '../services/clients.service';

const registerClient = async (req: Request, res: Response) => {
  const { ...data} = req.body as IClients;

  const dataClients = {...data};

  const clients = await clientsService.registerClient(dataClients);

  return res.status(201).json(clients);
}

const clientsController = { registerClient };

export default clientsController;