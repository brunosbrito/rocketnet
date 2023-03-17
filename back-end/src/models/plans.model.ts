import { RowDataPacket } from "mysql2";
import { IPlans } from "../interfaces";
import connection from "./connection";

const getAllPlans = async (): Promise<IPlans[]> => {
  const [plans] = await connection.execute<RowDataPacket[] & IPlans[]>(`
  SELECT * FROM Brunonet.plans
  `)
  return plans;
}

const plansModel = {getAllPlans};

export default plansModel;