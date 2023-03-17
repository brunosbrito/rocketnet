import { IPlans } from "../interfaces"
import plansModel from "../models/plans.model"

const getAllPlans = async (): Promise<IPlans[]> => {
  const plans = await plansModel.getAllPlans();

  return plans;
}

const plansService = { getAllPlans };

export default plansService;