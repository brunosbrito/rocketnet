import { Router } from 'express';
import plansController from '../controller/plans.controller';

const route = Router();

route.get('/', plansController.getAllPlans);
route.get('/:id', plansController.getById)

export default route;