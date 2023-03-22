import {  RowDataPacket } from "mysql2";
import connection from "./connection";

const valideteCoverage = async (coverage: string) => {
    const [result] = await connection.execute<RowDataPacket[]>(`
    SELECT cep_true FROM Rocketnet.coverage WHERE cep_true = ? 
    `, [coverage])
    return result
}

const coverageModel = { valideteCoverage };

export default coverageModel;

