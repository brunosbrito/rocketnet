import { Controller, Get, Param } from '@nestjs/common';
import { PlansModel } from 'src/models/plans.model';
import { PlanService } from 'src/service/plan.service';

@Controller('plans')
export class PlansController {
  constructor(private readonly plansSerive: PlanService) {}

  @Get()
  async findAll(): Promise<PlansModel[]> {
    const result = await this.plansSerive.findAll();
    return result;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<PlansModel> {
    const plan = await this.plansSerive.findById(+id);
    return plan;
  }
}
