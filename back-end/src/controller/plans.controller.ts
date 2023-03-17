import plansService from "../services/plans.service";
import { Request, Response } from 'express';

const getAllPlans = async (req: Request, res: Response) => {
  const plans = await plansService.getAllPlans();

  return res.status(200).json(plans);
}

const plansController = { getAllPlans };

export default plansController;