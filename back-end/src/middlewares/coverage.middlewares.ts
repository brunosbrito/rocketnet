import { NextFunction, Request, Response } from 'express';

export default function validateCoverage(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { cep } = req.body;

  const isCep = cep as string
  if(!isCep) return res.status(400).json({message: 'CEP REQUERIDO'})
  if (isCep === '32010-770') return res.status(200).json({ message: 'CEP APROVADO' });
 
  next();
}
