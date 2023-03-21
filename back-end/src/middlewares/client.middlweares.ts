import { NextFunction, Request, Response } from 'express';

interface IValidateField {
  name: string,
  tel: string,
  email: string,
}

export default function validateClients(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { name, tel, email } = req.body as IValidateField;

  if(!name) return res.status(400).json({message: 'name requerido'})
  if (!tel) return res.status(400).json({ message: 'tel requerido' });
  if (!email) return res.status(400).json({ message: 'email requerido' });
 
  next();
}