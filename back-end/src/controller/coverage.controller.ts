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
  console.log('re',dataResult)

  return res.status(200).json(dataResult);

}

const coverageController = { valideteCoverage };

export default coverageController;