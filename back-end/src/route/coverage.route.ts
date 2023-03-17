import { Router } from 'express';
import coverageController from '../controller/coverage.controller';
import validateCoverage from '../middlewares/coverage.middlewares';


const route = Router();

route.post('/',validateCoverage, coverageController.valideteCoverage);

export default route;