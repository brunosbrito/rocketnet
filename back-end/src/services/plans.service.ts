import { IPlans } from "../interfaces"
import plansModel from "../models/plans.model"

const getAllPlans = async (): Promise<IPlans[]> => {
  const plans = await plansModel.getAllPlans();

  return plans;
}

const getById =async (id: number) => {
  const plan = await plansModel.getById(id);

  return plan
}

const plansService = { getAllPlans, getById };

export default plansService;