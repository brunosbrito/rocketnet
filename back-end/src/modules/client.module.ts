import { Module } from '@nestjs/common';
import { ClientController } from 'src/controller/client.controller';
import { DatabaseModule } from 'src/database/database.modules';
import { clientProviders } from 'src/providers/client.provider';
import { ClientService } from 'src/service/client.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientController],
  providers: [...clientProviders, ClientService],
})
export class ClientModule {}
