import {  RowDataPacket } from "mysql2";
import connection from "./connection";

const valideteCoverage = async (coverage: string) => {


  if(coverage === '32010-770'){
    const [result] = await connection.execute<RowDataPacket[]>(`
    SELECT cep_true FROM Brunonet.coverage WHERE cep_true = ? 
    `, [coverage])
    console.log(result)
    return result
  }

  return {message: "CEP NÃO ENCONTRADO"}
  
}

const coverageModel = { valideteCoverage };

export default coverageModel;

