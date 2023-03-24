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
        { name: 'Plano A', description: 'Descrição do Plano A', price: '2' },
        { name: 'Plano B', description: 'Descrição do Plano B', price: '2' },
        { name: 'Plano C', description: 'Descrição do Plano C', price: '2' },
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
