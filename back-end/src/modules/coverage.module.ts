import { Module } from '@nestjs/common';
import { CoverageController } from 'src/controller/coverage.controller';
import { DatabaseModule } from 'src/database/database.modules';
import { coverageProviders } from 'src/providers/coverage.provider';
import { CoverageService } from 'src/service/coverage.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CoverageController],
  providers: [...coverageProviders, CoverageService],
})
export class CoverageModule {
  constructor(private readonly planService: CoverageService) {}
  async onApplicationBootstrap() {
    await this.planService.createInitialData();
  }
}
