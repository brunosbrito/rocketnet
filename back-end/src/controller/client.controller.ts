import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientModel } from 'src/models/clients.model';
import { ClientService } from 'src/service/client.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientSerive: ClientService) {}

  @Post()
  async create(@Body() client: ClientModel): Promise<ClientModel> {
    return await this.clientSerive.create(client);
  }
}
