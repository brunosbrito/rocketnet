import { Router } from 'express';
import plansController from '../controller/plans.controller';

const route = Router();

route.get('/', plansController.getAllPlans);

export default route;