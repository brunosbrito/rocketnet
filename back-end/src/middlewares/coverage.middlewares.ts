import { NextFunction, Request, Response } from 'express';

export default function validateCoverage(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { cep } = req.body;

  const isCep = cep as string
  if(!isCep) return res.status(400).json({message: 'cep requerido'})
  if (isCep === '32900-000') return res.status(200).json({ message: 'CEP REPROVADO' });
 
  next();
}
