import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { PlansModel } from 'src/models/plans.model';
import { Repository } from 'typeorm';

@Injectable()
export class PlanService {
  constructor(
    @Inject('PLAN_REPOSITORY')
    private planRepository: Repository<PlansModel>,
  ) {}

  async createInitialData(): Promise<void> {
    try {
      const plans = [
        {
          name: '50 MEGAS',
          description: 'COMBO FIBRA ÓPTICA 50MBPS R$49,9/MES + WI-FI + HBO MAX',
          price: '49,99',
        },
        {
          name: '150 MEGAS',
          description:
            'COMBO FIBRA ÓPTICA 150MBPS R$99,9/MES + WI-FI + HBO MAX',
          price: '99,99',
        },
        {
          name: '500 MEGAS',
          description:
            'COMBO FIBRA ÓPTICA 500MBPS R$149,9/MES + WI-FI + HBO MAX',
          price: '149,99',
        },
      ];
      await Promise.all(
        plans.map(async (plan) => await this.planRepository.save(plan)),
      );
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<PlansModel[]> {
    try {
      const plans = await this.planRepository.find();
      return plans;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async findById(id: number): Promise<PlansModel> {
    try {
      const plan = await this.planRepository.findOneById(id);
      return plan;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
