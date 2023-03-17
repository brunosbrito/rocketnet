import {  RowDataPacket } from "mysql2";
import connection from "./connection";

const valideteCoverage = async (coverage: string) => {


  if(coverage === '32010-770'){
    const [result] = await connection.execute<RowDataPacket[]>(`
    SELECT cep_true FROM Brunonet.coverage WHERE cep_true = ? 
    `, [coverage])
    return result
    
  } else if (coverage === '32900-000'){
  const [result] = await connection.execute<RowDataPacket[]>(`
    SELECT cep_false FROM Brunonet.coverage WHERE cep_false = ? 
  `, [coverage])
  return result
  }

}

const coverageModel = { valideteCoverage };

export default coverageModel;

