import plansService from "../services/plans.service";
import { Request, Response } from 'express';

const getAllPlans = async (req: Request, res: Response) => {
  const plans = await plansService.getAllPlans();

  return res.status(200).json(plans);
}

const getById =async (req: Request, res: Response) => {
  const { id } = req.params;
  const numberId = +id;
  const plan = await plansService.getById(numberId)
  console.log(plan)
  return res.status(201).json(plan)
}

const plansController = { getAllPlans, getById };

export default plansController;