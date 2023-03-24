import { Module } from '@nestjs/common';
import { PlansController } from 'src/controller/plan.controller';
import { DatabaseModule } from 'src/database/database.modules';
import { planProviders } from 'src/providers/plan.provider';
import { PlanService } from 'src/service/plan.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PlansController],
  providers: [...planProviders, PlanService],
})
export class PlansModule {
  constructor(private readonly planService: PlanService) {}
  async onApplicationBootstrap() {
    await this.planService.createInitialData();
  }
}
