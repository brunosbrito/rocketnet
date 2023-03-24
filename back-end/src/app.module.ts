import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.modules';
import { ClientModule } from './modules/client.module';
import { CoverageModule } from './modules/coverage.module';
import { PlansModule } from './modules/plans.module';

@Module({
  imports: [PlansModule, DatabaseModule, CoverageModule, ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
