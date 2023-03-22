import { ResultSetHeader } from "mysql2";
import { IClients } from "../interfaces";
import connection from "./connection";

const registerClient = async (client: IClients) => {
const clients = await connection.execute<ResultSetHeader>(`
  INSERT INTO Rocketnet.clients (
    name,
    cpf,
    rg,
    date_of_birth,
    tel,
    email,
    adress,
    number,
    district,
    city,
    cep,
    plan_id)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`, [client.name,
    client.cpf,
    client.rg,
    client.date_of_birth,
    client.tel, client.email,
    client.adress, client.number,
    client.district, client.city, client.cep, client.plan_id]);

  return clients
}

const clientsModel =  { registerClient };

export default clientsModel;