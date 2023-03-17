import { Response, Request } from 'express';
import { stringify } from 'querystring';
import { ICoverage } from '../interfaces';
import coverageService from '../services/coverage.service';

const valideteCoverage = async (req: Request, res: Response) => {
  const { cep } = req.body;

  const isCep = cep as string;
  

  const result = await coverageService.valideteCoverage(isCep);
  const dataResult = result as ICoverage[]

  console.log('cep do body', isCep)

  const filterTrue = dataResult?.filter((e)=> e.cep_true === '32010-770' )

  if(filterTrue) return res.status(200).json({message: 'CEP APROVADO'});

  return res.status(200).json({message: 'CEP INVÁLIDO'});

}

const coverageController = { valideteCoverage };

export default coverageController;