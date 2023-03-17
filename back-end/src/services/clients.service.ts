import { IClients } from "../interfaces";
import clientsModel from "../models/clients.model";

const registerClient =async (client: IClients) => {
  const clients = await clientsModel.registerClient(client);

  return {...client};
}

const clientsService = { registerClient };

export default clientsService;