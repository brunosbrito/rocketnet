import { RowDataPacket } from "mysql2";
import { IPlans } from "../interfaces";
import connection from "./connection";

const getAllPlans = async (): Promise<IPlans[]> => {
  const [plans] = await connection.execute<RowDataPacket[] & IPlans[]>(`
  SELECT * FROM Rocketnet.plans
  `)
  return plans;
}

const getById = async(id: number) : Promise<IPlans[]> => {
  const [plan] = await connection.execute<RowDataPacket[] & IPlans[]>(`
    SELECT * FROM Rocketnet.plans WHERE id = ?
  `,[id])

  return plan;
}

const plansModel = {getAllPlans, getById};

export default plansModel;